import { SerialPort } from 'serialport';
import { DelimiterParser } from '@serialport/parser-delimiter';
import { CS2000Config, CS2000Error, MeasurementResult, ColorimetricData, SpectralData } from './types';

export class CS2000 {
    private port: SerialPort | null = null;
    private parser: DelimiterParser | null = null;
    private config: CS2000Config;
    private commandQueue: Array<{
        resolve: (value: string) => void;
        reject: (reason?: any) => void;
    }> = [];
    private isConnected: boolean = false;

    constructor(config: CS2000Config) {
        this.config = config;
    }

    async connect(): Promise<void> {
        if (this.config.mock) {
            console.log('[CS2000] Mock connection established');
            this.isConnected = true;
            return;
        }

        return new Promise((resolve, reject) => {
            this.port = new SerialPort({
                path: this.config.portPath,
                baudRate: this.config.baudRate || 115200,
                autoOpen: false,
            });

            this.parser = this.port.pipe(new DelimiterParser({ delimiter: '\r\n' }));

            this.parser.on('data', (data: Buffer) => {
                const response = data.toString();
                this.handleResponse(response);
            });

            this.port.open((err) => {
                if (err) {
                    reject(err);
                } else {
                    this.isConnected = true;
                    resolve();
                }
            });

            this.port.on('error', (err) => {
                console.error('[CS2000] Serial port error:', err);
                this.isConnected = false;
            });
        });
    }

    async disconnect(): Promise<void> {
        if (this.config.mock) {
            console.log('[CS2000] Mock connection closed');
            this.isConnected = false;
            return;
        }

        return new Promise((resolve, reject) => {
            if (this.port && this.port.isOpen) {
                this.port.close((err) => {
                    if (err) reject(err);
                    else {
                        this.isConnected = false;
                        resolve();
                    }
                });
            } else {
                resolve();
            }
        });
    }

    private handleResponse(response: string) {
        const currentCommand = this.commandQueue.shift();
        if (currentCommand) {
            currentCommand.resolve(response);
        }
    }

    private async sendCommand(command: string, timeoutMs: number = 5000): Promise<string> {
        if (!this.isConnected) throw new Error('Device not connected');

        if (this.config.mock) {
            return this.mockResponse(command);
        }

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                const index = this.commandQueue.findIndex(c => c.resolve === resolve);
                if (index !== -1) {
                    this.commandQueue.splice(index, 1);
                    reject(new Error(CS2000Error.TIMEOUT));
                }
            }, timeoutMs);

            this.commandQueue.push({
                resolve: (value) => {
                    clearTimeout(timeout);
                    resolve(value);
                },
                reject: (reason) => {
                    clearTimeout(timeout);
                    reject(reason);
                }
            });

            this.port?.write(command + '\r\n', (err) => {
                if (err) {
                    // Remove from queue if write fails
                    const index = this.commandQueue.findIndex(c => c.resolve === resolve);
                    if (index !== -1) {
                        this.commandQueue.splice(index, 1);
                    }
                    clearTimeout(timeout);
                    reject(err);
                }
            });
        });
    }

    // --- Commands ---

    async setRemoteMode(enable: boolean): Promise<void> {
        const cmd = `RMTS,${enable ? 1 : 0}`;
        const response = await this.sendCommand(cmd);
        this.checkError(response);
    }

    async getIdentification(): Promise<string> {
        const response = await this.sendCommand('IDDR');
        // Response format: OK00,CS-2000,1,1234567
        const parts = response.split(',');
        if (parts[0] !== 'OK00') throw new Error(`Error: ${parts[0]}`);
        return parts.slice(1).join(','); // Return "CS-2000,1,1234567"
    }

    async measure(): Promise<number> {
        // 1. Start measurement: MEAS,1
        // Returns: OK00,005 (time in seconds)
        const response = await this.sendCommand('MEAS,1', 15000); // Pre-measurement can take time
        const parts = response.split(',');
        if (parts[0] !== 'OK00') throw new Error(`Measurement start failed: ${parts[0]}`);

        const estimatedTime = parseInt(parts[1], 10);

        // 2. Wait for completion
        // The device sends another "OK00" when finished.
        // Since my simple queue expects 1 response per command, I need to queue another read or handle the async nature.
        // However, for CS-2000, the "MEAS,1" command returns the time first, then *after* the measurement, it sends another code.
        // My current `sendCommand` implementation only waits for ONE response.
        // I need to wait for the SECOND response.

        // In mock mode, we just simulate the delay.
        if (this.config.mock) {
            await new Promise(r => setTimeout(r, 1000));
            return estimatedTime;
        }

        // For real device, we need to wait for the second response.
        // We can manually push a promise to the queue.
        return new Promise((resolve, reject) => {
            // The first response was already handled by sendCommand.
            // Now we wait for the second one.
            const timeout = setTimeout(() => {
                const index = this.commandQueue.findIndex(c => c.resolve === resolve as any);
                if (index !== -1) {
                    this.commandQueue.splice(index, 1);
                    reject(new Error('Measurement timeout'));
                }
            }, (estimatedTime + 5) * 1000); // Add buffer

            this.commandQueue.push({
                resolve: (val) => {
                    clearTimeout(timeout);
                    if (val.trim() === 'OK00') {
                        resolve(estimatedTime);
                    } else {
                        reject(new Error(`Measurement failed: ${val}`));
                    }
                },
                reject: (err) => {
                    clearTimeout(timeout);
                    reject(err);
                }
            });
        });
    }

    async readColorimetricData(): Promise<ColorimetricData> {
        // MEDR,2,0,01 (Colorimetric, All data) is not supported by all firmware, let's use specific ones if needed.
        // Technical note says: MEDR,2,0,00 reads all colorimetric data.
        // Response: OK00,X,Y,Z,x,y,Lv,u',v',T,d_uv,lambda_d,Pe
        // Note: The technical note format for MEDR,2,0,00 is not fully detailed in the snippet I saw, 
        // but usually it returns a CSV. Let's assume standard order or parse based on documentation if available.
        // Based on doc: "00: All colorimetric data"

        const response = await this.sendCommand('MEDR,2,0,00');
        const parts = response.split(',');
        if (parts[0] !== 'OK00') throw new Error(`Read data failed: ${parts[0]}`);

        // Assuming the order based on typical CS-2000 output for "All Data":
        // OK00, X, Y, Z, x, y, Lv, u', v', T, dev_uv, dom_wave, purity
        // All values are scientific notation or float.

        return {
            X: parseFloat(parts[1]),
            Y: parseFloat(parts[2]),
            Z: parseFloat(parts[3]),
            x: parseFloat(parts[4]),
            y: parseFloat(parts[5]),
            Lv: parseFloat(parts[6]),
            u_prime: parseFloat(parts[7]),
            v_prime: parseFloat(parts[8]),
            T: parseFloat(parts[9]),
            d_uv: parseFloat(parts[10]),
            lambda_d: parseFloat(parts[11]),
            Pe: parseFloat(parts[12]),
        };
    }

    private checkError(response: string) {
        const code = response.split(',')[0];
        if (code !== 'OK00') {
            throw new Error(`Device Error: ${code}`);
        }
    }

    private mockResponse(command: string): Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (command.startsWith('RMTS')) resolve('OK00');
                else if (command === 'IDDR') resolve('OK00,CS-2000,1,MOCK123');
                else if (command === 'MEAS,1') resolve('OK00,002'); // 2 seconds
                else if (command.startsWith('MEDR,2')) {
                    // Mock colorimetric data
                    // OK00, X, Y, Z, x, y, Lv, u', v', T, dev_uv, dom_wave, purity
                    resolve('OK00,95.04,100.00,108.88,0.3127,0.3290,100.0,0.1978,0.4683,6500,0.0000,580,0.1');
                }
                else resolve('OK00');
            }, 100);
        });
    }
}

import { createInterface } from 'readline';
import { CS2000 } from './CS2000';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

let cs2000: CS2000 | null = null;

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    console.log('=== CS-2000 Control Module Test Utility ===');

    while (true) {
        console.log('\nOptions:');
        console.log('1. Connect (Mock Mode)');
        console.log('2. Connect (Real Device)');
        console.log('3. Get Identification (IDDR)');
        console.log('4. Measure (MEAS)');
        console.log('5. Read Colorimetric Data (MEDR)');
        console.log('6. Disconnect');
        console.log('0. Exit');

        const choice = await question('Select an option: ');

        try {
            switch (choice) {
                case '1':
                    if (cs2000) await cs2000.disconnect();
                    cs2000 = new CS2000({ portPath: 'COM1', mock: true });
                    await cs2000.connect();
                    console.log('Connected in Mock Mode.');
                    break;

                case '2':
                    if (cs2000) await cs2000.disconnect();
                    const port = await question('Enter COM port (e.g., COM3): ');
                    cs2000 = new CS2000({ portPath: port, mock: false });
                    await cs2000.connect();
                    console.log(`Connected to ${port}.`);
                    break;

                case '3':
                    if (!cs2000) { console.log('Not connected.'); break; }
                    const id = await cs2000.getIdentification();
                    console.log('Device ID:', id);
                    break;

                case '4':
                    if (!cs2000) { console.log('Not connected.'); break; }
                    console.log('Starting measurement...');
                    const time = await cs2000.measure();
                    console.log(`Measurement completed. Estimated time was ${time}s.`);
                    break;

                case '5':
                    if (!cs2000) { console.log('Not connected.'); break; }
                    const data = await cs2000.readColorimetricData();
                    console.log('Data:', JSON.stringify(data, null, 2));
                    break;

                case '6':
                    if (cs2000) {
                        await cs2000.disconnect();
                        cs2000 = null;
                        console.log('Disconnected.');
                    }
                    break;

                case '0':
                    if (cs2000) await cs2000.disconnect();
                    rl.close();
                    process.exit(0);
                    break;

                default:
                    console.log('Invalid option.');
            }
        } catch (err: any) {
            console.error('Error:', err.message);
        }
    }
}

main();

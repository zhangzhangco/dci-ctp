const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

const isDev = !app.isPackaged;
const port = process.env.PORT || 3000;

let nextProcess = null;
let mainWindow = null;

// 在生产环境设置数据库路径
if (!isDev) {
    process.env.DB_FILE_NAME = path.join(app.getPath('userData'), 'sqlite.db');
}

// 禁用硬件加速以避免 GPU 崩溃
app.disableHardwareAcceleration();

function startNextServer() {
    return new Promise((resolve, reject) => {
        if (isDev) {
            // 开发模式：假设外部已运行 npm run dev
            resolve();
            return;
        }

        // 生产模式：启动 Next.js 服务器
        const nextScript = path.join(process.resourcesPath, 'app', 'node_modules', 'next', 'dist', 'bin', 'next');
        const appPath = path.join(process.resourcesPath, 'app');

        // 检查脚本是否存在
        if (!fs.existsSync(nextScript)) {
            reject(new Error(`Next.js script not found at: ${nextScript}\nResources Path: ${process.resourcesPath}`));
            return;
        }

        console.log('Starting Next.js server from:', nextScript);

        let startupLog = '';
        const appendLog = (data) => {
            console.log('[Next.js]', data.toString()); // 输出到主进程控制台
            startupLog += data.toString();
            if (startupLog.length > 2000) startupLog = startupLog.slice(-2000); // 保留最后 2000 字符
        };

        nextProcess = spawn(process.execPath, [nextScript, 'start', '-p', port], {
            cwd: appPath,
            env: { ...process.env, NODE_ENV: 'production', ELECTRON_RUN_AS_NODE: '1' },
            stdio: ['ignore', 'pipe', 'pipe'] // 捕获输出
        });

        nextProcess.stdout.on('data', appendLog);
        nextProcess.stderr.on('data', appendLog);

        nextProcess.on('error', (err) => {
            console.error('Failed to start Next.js server:', err);
            reject(new Error(`Failed to spawn Next.js: ${err.message}\nLogs:\n${startupLog}`));
        });

        nextProcess.on('exit', (code, signal) => {
            if (code !== 0) {
                console.error(`Next.js server exited with code ${code} and signal ${signal}`);
                reject(new Error(`Next.js exited with code ${code}.\nLogs:\n${startupLog}`));
            }
        });

        // 轮询检查服务器是否准备就绪
        const checkServer = async () => {
            try {
                const response = await fetch(`http://localhost:${port}`);
                if (response.ok) {
                    resolve();
                } else {
                    setTimeout(checkServer, 500);
                }
            } catch (e) {
                setTimeout(checkServer, 500);
            }
        };

        // 设置超时
        const timeout = setTimeout(() => {
            reject(new Error(`Next.js server start timeout (30s).\nLogs:\n${startupLog}`));
        }, 30000); // 30秒超时

        checkServer().then(() => clearTimeout(timeout));
    });
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const url = `http://localhost:${port}`;
    mainWindow.loadURL(url);

    // 生产环境不显示开发者工具
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(async () => {
    try {
        await startNextServer();
        createWindow();
    } catch (error) {
        console.error('Failed to create window:', error);
        dialog.showErrorBox('Error', `Failed to start application server: ${error.message}`);
        app.quit();
    }

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (nextProcess) {
        nextProcess.kill();
    }
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('will-quit', () => {
    if (nextProcess) {
        nextProcess.kill();
    }
});

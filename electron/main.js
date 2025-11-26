const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

const isDev = process.env.NODE_ENV !== 'production';
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
    return new Promise((resolve) => {
        if (isDev) {
            // 开发模式：假设外部已运行 npm run dev
            resolve();
            return;
        }

        // 生产模式：启动 Next.js 服务器
        const nextBin = path.join(process.resourcesPath, 'app', 'node_modules', '.bin', 'next');
        const appPath = path.join(process.resourcesPath, 'app');

        nextProcess = spawn(nextBin, ['start', '-p', port], {
            cwd: appPath,
            env: { ...process.env, NODE_ENV: 'production' },
            stdio: 'inherit'
        });

        // 等待服务器启动
        setTimeout(() => resolve(), 3000);
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
    await startNextServer();
    createWindow();

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

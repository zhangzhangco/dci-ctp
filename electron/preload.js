const { contextBridge } = require('electron');

// 如果需要暴露 API 给渲染进程，可以在这里添加
contextBridge.exposeInMainWorld('electron', {
    // 示例：versions: process.versions
});

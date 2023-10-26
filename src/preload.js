const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    logEvent: (arg) => ipcRenderer.send('log-event', arg)
})

console.log("Hello")

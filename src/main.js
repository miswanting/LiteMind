const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('src/index.html')
    if (isDev) {
        const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
        console.log('Installing Devtools...')
        installExtension(VUEJS_DEVTOOLS)
            .then((name) => console.log(`Extension Added!: ${name}`))
            .catch((err) => {
                console.log('An Error Occurred: ', err)
                console.log('But PLEASE DO NOT WORRY!')
                console.log('It`s FINE! It`s NOT IMPORTANT at all!')
            });
        win.webContents.openDevTools()
    }
}
app.whenReady().then(createWindow)
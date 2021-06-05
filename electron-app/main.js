"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var run_game_1 = require("./run-game");
var path = require('path');
var url = require('url');
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    // load the dist folder from Angular
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // The following is optional and will open the DevTools:
    // win.webContents.openDevTools()
    win.on('closed', function () {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
// on macOS, closing the window doesn't quit the app
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.ipcMain.on('appLoaded', function (event, args) {
    if (!win) {
        throw new Error('Window is not defined!');
    }
    win.webContents.send('appLoadedResponse', run_game_1.runGame);
});

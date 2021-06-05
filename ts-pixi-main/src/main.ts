import { app, BrowserWindow, ipcMain } from 'electron';
import { runGame } from './run-game';
import path from 'path';
import url from 'url';

let win: BrowserWindow | null;
function createWindow(): void {
    win = new BrowserWindow({ width: 800, height: 600 });
    // load the dist folder from Angular

    const pathname = path.join(__dirname, '../../ts-pixi-ui/dist/ts-pixi-ui/index.html');
    console.log(pathname);

    win.loadURL(
        url.format({
            pathname,
            protocol: 'file:',
            slashes: true,
        })
    );
    // The following is optional and will open the DevTools:
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
// on macOS, closing the window doesn't quit the app
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('appLoaded', (event, args) => {
    if (!win) {
        throw new Error('Window is not defined!');
    }

    win.webContents.send('appLoadedResponse', runGame);
});
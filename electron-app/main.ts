import { app, BrowserWindow, ipcMain } from 'electron';
import { runGame } from './run-game';
const path = require('path');
const url = require('url');

let win: BrowserWindow | null;
function createWindow(): void {
  win = new BrowserWindow({ width: 800, height: 600 });
  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '../dist/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
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

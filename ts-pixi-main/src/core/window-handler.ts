import { BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';
import { IpcActions } from '@core/enums/ipc-actions.enum';

let win: BrowserWindow | null;
export const createWindow = (): void => {
    win = new BrowserWindow({ width: 1366, height: 768, webPreferences: { contextIsolation: false, nodeIntegration: true } });
    // load the dist folder from Angular

    const pathname = path.join(__dirname, '../../ts-pixi-ui/dist/ts-pixi-ui/index.html');

    win.loadURL(
        url.format({
            pathname,
            protocol: 'file:',
            slashes: true,
        })
    );

    // The following is optional and will open the DevTools:
    win.webContents.openDevTools();

    win.on(IpcActions.WINDOW_CLOSED, () => {
        win = null;
    });
};

import { ipcMain } from 'electron';
import { IpcMainEvent } from 'electron/main';
import { IpcActions } from './enums/ipc-actions.enum';
import { listDirectory, readFile, writeFile } from './services/files.service';

export const initIpc = (): void => {
    ipcMain.on(IpcActions.READ_DIR, (event: IpcMainEvent, arg: string) => listDirectory(arg));
    ipcMain.on(IpcActions.READ_FILE, (event: IpcMainEvent, arg: string) => readFile(arg));
    ipcMain.on(IpcActions.WRITE_FILE, (event: IpcMainEvent, args: Array<string>) => writeFile(args[0], args[1]));
};

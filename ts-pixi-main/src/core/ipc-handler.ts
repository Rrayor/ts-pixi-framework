import { FilesService } from '@core/services/files.service';
import { ipcMain } from 'electron';
import { IpcMainEvent } from 'electron/main';
import { IpcActions } from './enums/ipc-actions.enum';

export const initIpc = (): void => {
    ipcMain.on(IpcActions.READ_DIR, (event: IpcMainEvent, arg: string) => (event.returnValue = FilesService.instance.listDirectory(arg)));
    ipcMain.on(IpcActions.READ_FILE, (event: IpcMainEvent, arg: string) => (event.returnValue = FilesService.instance.readFile(arg)));
    ipcMain.on(IpcActions.WRITE_FILE, (event: IpcMainEvent, args: Array<string>) => (event.returnValue = FilesService.instance.writeFile(args[0], args[1])));
};

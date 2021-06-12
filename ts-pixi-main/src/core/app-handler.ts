import { IpcActions } from '@core/enums/ipc-actions.enum';
import { createWindow } from '@core/window-handler';
import { app } from 'electron';
import { Platforms } from '@core/enums/platforms.enum';

export const initApp = (): void => {
    app.on(IpcActions.APP_READY, createWindow);
    // on macOS, closing the window doesn't quit the app
    app.on(IpcActions.APP_WINOW_ALL_CLOSED, () => {
        if (process.platform !== Platforms.DARWIN) {
            app.quit();
        }
    });
};

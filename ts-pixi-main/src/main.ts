import { initApp } from '@core/app-handler';
import { initIpc } from '@core/ipc-handler';

const init = (): void => {
    initApp();
    initIpc();
};

init();

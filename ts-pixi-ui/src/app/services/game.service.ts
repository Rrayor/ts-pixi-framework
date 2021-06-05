import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private ipc?: IpcRenderer;

  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('Could not load electron ipc');
    }
  }

  async getGame(): Promise<() => void> {
    return new Promise<() => void>((resolve, reject) => {
      if (!this.ipc) {
        throw new Error('ipc is not defined');
      }

      this.ipc.once('getGameResponse', (event, arg) => {
        resolve(arg);
      });
      this.ipc.send('getGame');
    });
  }
}
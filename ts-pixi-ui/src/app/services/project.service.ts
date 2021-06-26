import { Injectable } from '@angular/core';
import { Project } from '@core/models/Project.model';
import { IpcRenderer } from 'electron';
import { IpcActions } from '@core/enums/ipc-actions.enum';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
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

    getAllProjects(): Array<string> {
        // TODO: configurable projects directory
        return this.ipc.sendSync(IpcActions.READ_DIR, 'data');
    }

    getProjectData(fileName: string): Project {
        return JSON.parse(
            this.ipc.sendSync(IpcActions.READ_FILE, fileName)
        ) as Project;
    }

    saveProject(project: Project): void {
        // TODO: configurable projects folder
        this.ipc.send(IpcActions.WRITE_FILE, 'data', project.serialize());
    }
}

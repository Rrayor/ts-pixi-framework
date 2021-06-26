import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

export class FilesService {
    private static _instance: FilesService;

    public static get instance(): FilesService {
        if (!this._instance) {
            this._instance = new FilesService();
        }

        return this._instance;
    }

    private constructor() {}

    listDirectory(directoryPath: string): Array<string> {
        try {
            return readdirSync(directoryPath);
        } catch (error) {
            // TODO: better error handling
            console.error(error);
        }
    }

    readFile(filePath: string): Buffer {
        try {
            return readFileSync(filePath);
        } catch (error) {
            console.error(error);
        }
    }

    writeFile(filePath: string, content: string): void {
        try {
            writeFileSync(filePath, content);
        } catch (error) {
            console.error(error);
        }
    }
}

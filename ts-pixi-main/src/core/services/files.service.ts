import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

export const listDirectory = (directoryPath: string): Array<string> => {
    try {
        return readdirSync(directoryPath);
    } catch (error) {
        // TODO: better error handling
        console.error(error);
    }
};

export const readFile = (filePath: string): Buffer => {
    try {
        return readFileSync(filePath);
    } catch (error) {
        console.error(error);
    }
};

export const writeFile = (filePath: string, content: string): void => {
    try {
        writeFileSync(filePath, content);
    } catch (error) {
        console.error(error);
    }
};

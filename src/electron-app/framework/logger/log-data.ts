import { LogLevel } from '@electron-app/framework/logger';

export interface ILogData {
    message: string;
    level?: LogLevel;
    sender?: unknown;
}

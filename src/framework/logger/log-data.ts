import { LogLevel } from '@framework/logger';

export interface ILogData {
    message: string;
    level?: LogLevel;
    sender?: unknown;
}

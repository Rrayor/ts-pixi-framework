import { LogTarget } from '@electron-app/framework/logger/enums/log-target.enum';
export interface ILoggerConfig {
    target: LogTarget;
    name?: string;
    logPath?: string;
}

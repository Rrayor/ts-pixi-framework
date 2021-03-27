import { LogTarget } from './enums/log-target.enum';
export interface ILoggerConfig {
    target: LogTarget;
    name?: string;
    logPath?: string;
}

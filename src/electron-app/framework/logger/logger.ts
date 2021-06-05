//import { writeFile } from 'fs';
import { ILogData, ILoggerConfig, LogLevel } from '@electron-app/framework/logger';
import { LogTarget } from '@electron-app/framework/logger/enums/log-target.enum';

export class Logger {
    constructor(private config: ILoggerConfig) {}

    private get logPath(): string {
        return this.config.logPath || 'logs';
    }

    public log(logData: ILogData): void {
        const { message, level, sender } = this.validateLogData(logData);

        switch (this.config.target) {
            case LogTarget.LOG_FILE:
                this.logToFile(message, level, sender);
                break;
            default:
                this.logToConsole(message, level, sender);
                break;
        }
    }

    private logToFile(message: string, level: LogLevel, sender: any): void {
        // TODO: It is not currently possible to write to file. I will need an electron app or a micro-backend for this.
    }

    private logToConsole(message: string, level: LogLevel, sender: any): void {
        const dateTime = new Date(Date.now()).toISOString();
        this.getLogFunction(level)(`${dateTime} [${level.toString()}] [${sender}]: ${message}`);
    }

    private getLogFunction(level: LogLevel): (message: string) => void {
        switch (level) {
            case LogLevel.ERROR:
            case LogLevel.FATAL:
                return console.error;
            case LogLevel.WARN:
                return console.warn;
            default:
                return console.log;
        }
    }

    private validateLogData(logData: ILogData): { message: string; level: LogLevel; sender: any } {
        return {
            message: logData.message,
            level: logData.level || LogLevel.DEBUG,
            sender: logData.sender || 'UNKNOWN SENDER',
        };
    }
}

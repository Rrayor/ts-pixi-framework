import { LogTarget } from '~/framework/logger/enums/log-target.enum';

import { LogLevel } from './enums/log-level.enum';

export class Logger {
  constructor(private target: LogTarget, private name?: string) { }
  
  public log(message: string, level: LogLevel, sender?: unknown): void {
    switch (this.target) {
      case LogTarget.LOG_FILE:
        this.logToFile(message, level, sender);
        break;
      default:
        this.logToConsole(message, level, sender);
        break;
    }
  }

  private logToFile(message: string, level: LogLevel, sender?: unknown): void {
    // TODO: implement logToFile
  }

  private logToConsole(message: string, level: LogLevel, sender?: unknown): void {
    this.getLogFunction(level)(`${new Date(Date.now()).toISOString()} [${level.toString()}] [${sender || 'UNKNOWN'}]: ${message}`);
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
}
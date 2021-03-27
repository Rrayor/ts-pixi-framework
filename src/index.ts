import { Logger, LogLevel, LogTarget } from '@framework/logger';

const logger = new Logger({ target: LogTarget.CONSOLE, name: 'LOGGER_1' });
logger.log({ message: 'Hello Logging', level: LogLevel.DEBUG, sender: this });

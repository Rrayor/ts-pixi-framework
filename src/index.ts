import { Logger, LogLevel, LogTarget } from '@framework/logger';

const logger = new Logger(LogTarget.CONSOLE, 'LOGGER_1');
logger.log('Hello Logging!', LogLevel.WARN);
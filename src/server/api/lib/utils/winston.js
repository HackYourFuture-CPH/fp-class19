// nicer output
const chalk = require('chalk');
/* const winston = require('winston'); */
const appRoot = require('app-root-path');
const moment = require('moment-timezone');
const JSON = require('circular-json');
const { createLogger, format, transports } = require('winston');

const { combine, label, printf, colorize, timestamp } = format;

const styles = {
  log: chalk.bold.white,
  info: chalk.bold.white.bgRed,
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  success: chalk.bold.green,
};

// formats

const infamou5ConsoleFormat = combine(
  colorize({ all: false }),
  timestamp({
    format: 'YYYY-MM-DD hh:mm:ss',
  }),
  printf((info) => styles.info(`${info.message}`))
)

const myFormatFile = printf(
  (info) =>
    `${info.timestamp} [${info.level}]: ${info.label} - ${
      typeof info.message === 'object'
        ? JSON.stringify(info.message)
        : info.message
    }`,
);
const myFormatConsole = printf((info) =>
  styles.info(
    ` ℹ️ ${
      typeof info.message === 'object'
        ? JSON.stringify(info.message)
        : info.message
    }`,
  ),
);

const appendTimestamp = format((info, opts) => {
  if (opts.tz) {
    return {
      ...info,
      timestamp: moment().tz(opts.tz).format(),
    };
  }
  return info;
});

const customFormat = combine(
  label({ label: 'main' }),
  appendTimestamp({ tz: 'Europe/Copenhagen' }),
  myFormatFile,
);

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: customFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: infamou5ConsoleFormat,
  },
};

const logger = createLogger({
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// for morgan generated outputs
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports =  { logger };

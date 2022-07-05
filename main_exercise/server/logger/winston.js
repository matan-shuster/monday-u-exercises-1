const winston = require('winston');
const options ={
    file: {
        level: 'info',
        filename: `./server/logs/winston.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
    },
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    },
};

module.exports = logger;
const winston = require("winston");

const filter = (level) => winston.format((info) => {
    if(info.level ===level){
        return info;
    }
})();

const levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    http: 5,
};

const transports = [
    new winston.transports.File({
        filename: "requests.log",
        level: "http",
        format: filter("http")
    })
]

const logger = winston.createLogger({
    levels,
    transports
})

module.exports = logger;
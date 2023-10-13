const fs = require('fs');

module.exports.writeToFile = (err) => {
    const logDir = './log';
    const data = `{message: "${err.message}",timestamp: ${new Date().getTime()}, code: ${err.code}, stackTrace: {${err.stack}}},\r\n`;
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    const options = {
      encoding: 'utf8',
      code: 438,
    };
    return fs.appendFileSync(`${logDir}/error.log`, data, options);
};

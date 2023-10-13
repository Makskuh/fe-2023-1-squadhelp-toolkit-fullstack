const fs = require('fs');

module.exports.loggerUpdater = (err, res, req, next) => {
  const logDir = './log';
  const mainLog = fs.readFileSync(`${logDir}/error.log`, {
    encoding: 'utf8',
    flag: 'r',
  });
  console.log(mainLog)
  next();
};

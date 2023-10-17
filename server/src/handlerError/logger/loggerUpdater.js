const fs = require('fs');

module.exports.loggerUpdater = (err, res, req, next) => {
  const logDir = './log';
  const logArray = []
  // const mainLog = fs.readFileSync(`${logDir}/error.json`, {
  //   encoding: 'utf8',
  //   flag: 'r',
  // });
  next();
};

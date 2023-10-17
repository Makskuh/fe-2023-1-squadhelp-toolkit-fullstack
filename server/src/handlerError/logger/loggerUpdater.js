const fs = require('fs');

module.exports.loggerUpdater = (err, res, req, next) => {
  const logDir = './log';
  const pathMainLog = `${logDir}/error.json`
  const newPathLogFile = `${logDir}/${new Date()
    .toLocaleDateString()
    .replace(/\//g, '-')}_error.json`;
  let logArray = [];
  try {
    if (fs.existsSync(pathMainLog) && !fs.existsSync(newPathLogFile)) {
      const mainLog = fs.readFileSync(pathMainLog, {
        encoding: 'utf8',
        flag: 'r',
      });
      logArray = JSON.parse(mainLog);
      const arrFor = logArray.map((val) => ({
        message: val.message,
        timestamp: val.timestamp,
        code: val.code,
      }));
      const arrJson = JSON.stringify(arrFor);
      fs.writeFileSync(newPathLogFile, arrJson);
      fs.writeFileSync(pathMainLog, JSON.stringify([]))
    }
    next()
  } catch (error) {
    next();
  }
  next();
};

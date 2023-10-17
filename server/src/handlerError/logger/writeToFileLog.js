const fs = require('fs');

module.exports.writeToFile = (err) => {
  const logDir = './log';
  let arrayLogError = [];
  const options = {
    encoding: 'utf8',
    code: 438,
  };
  const data = {
    message: err.message,
    timestamp: new Date().getTime(),
    code: err.code,
    stackTrace: err.stack,
  };
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    arrayLogError.push(data);
    const arrJSON = JSON.stringify(arrayLogError);
    return fs.appendFileSync(`${logDir}/error.json`, arrJSON, options);
  }
  let lastLogToJson = JSON.parse(fs.readFileSync(`${logDir}/error.json`, {
    encoding: 'utf8',
    flag: 'r',
  }));
  lastLogToJson.push(data)
  return fs.writeFileSync(`${logDir}/error.json`, JSON.stringify(lastLogToJson), options);
};

const fs = require('fs');

module.exports.writeToFile =  (err) => {
  try {
    const logDir = './log';
  const fullPathToLog = `${logDir}/error.json`
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
  if (!fs.existsSync(fullPathToLog)) {
    fs.mkdirSync(logDir);
    arrayLogError.push(data);
    const arrJSON = JSON.stringify(arrayLogError);
    return  fs.appendFileSync(fullPathToLog, arrJSON, options);
  }
  let lastLogToJson = JSON.parse(fs.readFileSync(fullPathToLog, {
    encoding: 'utf8',
    flag: 'r',
  }));
  lastLogToJson.push(data);
  return fs.writeFileSync(fullPathToLog, JSON.stringify(lastLogToJson), options);
  } catch (error) {
    next()
  }
  
};

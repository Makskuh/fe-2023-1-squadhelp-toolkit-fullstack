const writeLogToFile = require('./writeToFileLog');

module.exports = (err, req, res, next) => {
  try {
    if (err) {
      writeLogToFile.writeToFile(err);
      next(err);
    }
  } catch (error) {
    next(error);
  }
};

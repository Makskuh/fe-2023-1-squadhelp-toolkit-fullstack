const logger = require('./writeToFileLog')

module.exports.logger = async (err, req, res, next) => {
	if (err) {
    logger.writeToFile(err)
		next(err);
	}
	next()
}
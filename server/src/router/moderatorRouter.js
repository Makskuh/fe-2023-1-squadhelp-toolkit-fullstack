const moderatorRouter = require('express').Router();
const moderatorController = require('../controllers/moderatorController');

moderatorRouter.get(
	'/getAllOffers',moderatorController.getAllOffers
)

module.exports = moderatorRouter 
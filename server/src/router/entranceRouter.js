const entranceRouter = require('express').Router();
const userController = require('../controllers/userController');
const validators = require('../middlewares/validators');

entranceRouter.post(
  '/registration',
  validators.validateRegistrationData,
  userController.registration,
);

entranceRouter.post(
  '/login',
  validators.validateLogin,
  userController.login,
);

module.exports = entranceRouter;
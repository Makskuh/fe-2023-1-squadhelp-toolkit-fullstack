const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const upload = require('../utils/fileUpload');
const contestRouter = require('./contestRouter');
const chatRouter = require('./chatRouter');
const userRouter = require('./userRouter')
const router = express.Router();

router.post(
  '/registration',
  validators.validateRegistrationData,
  userController.registration,
);

router.post(
  '/login',
  validators.validateLogin,
  userController.login,
);
router.use('/',userRouter);
router.use('/',checkToken.checkToken,chatRouter);
router.use('/contests', checkToken.checkToken, contestRouter);


router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);


module.exports = router;

const express = require('express');
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const contestRouter = require('./contestRouter');
const chatRouter = require('./chatRouter');
const userRouter = require('./userRouter');
const entranceRouter = require('./entranceRouter')
const router = express.Router();

router.use('/entrance',entranceRouter)
router.use('/user',userRouter);
router.use('/chat',checkToken.checkToken,chatRouter);
router.use('/contests', checkToken.checkToken, contestRouter);


module.exports = router;

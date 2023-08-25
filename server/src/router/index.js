const express = require('express');
const checkToken = require('../middlewares/checkToken');
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

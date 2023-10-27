const express = require('express');
const checkToken = require('../middlewares/checkToken');
const contestRouter = require('./contestRouter');
const chatRouter = require('./chatRouter');
const userRouter = require('./userRouter');
const entranceRouter = require('./entranceRouter');
const moderatorRouter = require('./moderatorRouter')
const router = express.Router();

router.use('/entrance', entranceRouter);
router.use('/user', userRouter);
router.use('/chat', checkToken.checkToken, chatRouter);
router.use('/contests', checkToken.checkToken, contestRouter);
router.use('/moderator',moderatorRouter);

module.exports = router;

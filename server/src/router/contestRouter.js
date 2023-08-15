const express = require('express');
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');
const contestRouter = express.Router();

contestRouter
  .route('/')
  .get(
    checkToken.checkToken,
    basicMiddlewares.onlyForCreative,
    contestController.getContests
  )
  .post(checkToken.checkToken, contestController.getCustomersContests)
  .put(
    checkToken.checkToken,
    upload.updateContestFile,
    contestController.updateContest
  );

//   contestRouter.get(
//   '/contestsById',
//   checkToken.checkToken,
//   basicMiddlewares.canGetContest,
//   contestController.getContestById
// );


module.exports = contestRouter;
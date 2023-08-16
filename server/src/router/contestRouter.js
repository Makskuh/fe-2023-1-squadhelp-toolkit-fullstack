const express = require('express');
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');
const contestRouter = express.Router();

contestRouter.use(checkToken.checkToken)

contestRouter
  .route('/')
  .get(
    basicMiddlewares.onlyForCreative,
    contestController.getContests
  )
  .post(contestController.getCustomersContests)
  .put(
    upload.updateContestFile,
    contestController.updateContest
  );

  contestRouter.get(
  '/:contestId',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);


module.exports = contestRouter;
const express = require('express');
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const contestRouter = express.Router();

contestRouter.get('/all',
    basicMiddlewares.onlyForCreative,
    contestController.getContests
  )
  contestRouter.get('/customer',contestController.getCustomersContests);

  contestRouter.put('/:contestId',
    upload.updateContestFile,
    contestController.updateContest
  );

  contestRouter.get(
  '/:contestId',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);


module.exports = contestRouter;
const chatRouter = require('express').Router();
const chatController = require('../controllers/chatController');

chatRouter.post('/getChat', chatController.getChat);

chatRouter.post('/newMessage', chatController.addMessage);

chatRouter.post('/getPreview', chatController.getPreview);

chatRouter.post('/blackList', chatController.blackList);

chatRouter.post('/favorite', chatController.favoriteChat);

chatRouter.post('/createCatalog', chatController.createCatalog);

chatRouter.post('/updateNameCatalog', chatController.updateNameCatalog);

chatRouter.post('/addNewChatToCatalog', chatController.addNewChatToCatalog);

chatRouter.post('/removeChatFromCatalog', chatController.removeChatFromCatalog);

module.exports = chatRouter;

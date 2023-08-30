const chatRouter = require('express').Router();
const chatController = require('../controllers/chatController');

chatRouter.get('/:interlocutorId', chatController.getChat);

chatRouter.post('/newMessage', chatController.addMessage);

chatRouter.post('/getPreview', chatController.getPreview);

chatRouter.delete('/deleteCatalog', chatController.deleteCatalog);

chatRouter.put('/blackList', chatController.blackList);

chatRouter.put('/favorite', chatController.favoriteChat);

chatRouter.post('/getCatalogs',chatController.getCatalogs);

chatRouter.post('/createCatalog', chatController.createCatalog);

chatRouter.put('/updateNameCatalog', chatController.updateNameCatalog);

chatRouter.post('/addNewChatToCatalog', chatController.addNewChatToCatalog);

chatRouter.delete('/removeChatFromCatalog', chatController.removeChatFromCatalog);

module.exports = chatRouter;

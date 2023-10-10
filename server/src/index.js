const http = require('http');
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const multerErrorHandler = require('./handlerError/multerHandler');
const handlerError = require('./handlerError/handler');
const { DEV_FILES_PATH } = require('./constants');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static(DEV_FILES_PATH));
app.use(router);
app.use(handlerError);
app.use(multerErrorHandler);
const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${PORT}!`));
controller.createConnection(server);



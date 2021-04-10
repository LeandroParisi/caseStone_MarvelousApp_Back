const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./src/middlewares/errorHandler/errorHandler');
const { UsersRouter, CharactersRouter, ComicsRouter } = require('./src/routes');

require('dotenv').config();

const PORT = process.env.PORT

const app = express();

app.use(bodyParser.json());

app.use('/user', UsersRouter)
app.use('/character', CharactersRouter)
app.use('/controller', ComicsRouter)

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
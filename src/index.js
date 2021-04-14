const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler/errorHandler');
const { UsersRouter, CharactersRouter, ComicsRouter } = require('./routes');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', UsersRouter);
app.use('/characters', CharactersRouter);
app.use('/comics', ComicsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));

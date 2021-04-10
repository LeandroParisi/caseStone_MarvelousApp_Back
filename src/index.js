const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./src/middlewares/errorHandler/errorHandler');
require('dotenv').config();

const PORT = process.env.PORT || customPort;

const app = express();

app.use(bodyParser.json());


app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
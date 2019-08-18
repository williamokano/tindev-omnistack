const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.PORT || 3333;
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/tindev';

const server = express();

mongoose.connect(mongoConnectionString, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Listening on port ${port}`));

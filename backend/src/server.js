const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.PORT || 3333;

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-e9nlz.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Listening on port ${port}`));

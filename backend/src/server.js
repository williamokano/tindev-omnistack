const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.PORT || 3333;
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/tindev';

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    console.log(user, socket.id);

    connectedUsers[user] = socket.id;
});

mongoose.connect(mongoConnectionString, { useNewUrlParser: true });

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => console.log(`Listening on port ${port}`));

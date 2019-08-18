const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        try {
            const { user } = req.headers;
            
            const loggedDev = await Dev.findById(user);

            if (!loggedDev) {
                return res.status(404).json({ user });
            }

            const users = await Dev.find({
                $and: [
                    { _id: { $ne: user } },
                    { _id: { $nin: loggedDev.likes }},
                    { _id: { $nin: loggedDev.dislikes }},
                ]
            });

            return res.json(users);
        } catch (e) {
            console.log(`Got error ${e}`);
            return res.status(400).send();
        }
    },

    async store(req, res) {
        try {
            const { username } = req.body;
            console.log(`Attempting to create ${username}`)

            const userExists = await Dev.findOne({ user: username })

            if (userExists) {
                console.log(`User ${username} already exists`)
                return res.json(userExists);
            }

            console.log(`Looking on github for ${username}`)
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(`Got response: ${response.data}`);
            const { name, bio, avatar_url: avatar } = response.data;

            const dev = await Dev.create({
                name,
                user: username,
                bio,
                avatar
            })

            return res.json(dev);
        } catch (e) {
            console.log(`Got error ${e}`);
            return res.status(400).send();
        }
    }
};
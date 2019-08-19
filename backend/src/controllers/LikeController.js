const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        try {
            const { user } = req.headers;
            const { devId } = req.params;

            const loggedDev = await Dev.findById(user);
            const targetDev = await Dev.findById(devId);

            if (!targetDev) {
                throw new Error(`Dev ${devId} do not exists`)
            }

            if (targetDev.likes.includes(loggedDev._id)) {
                const loggedSocket = req.connectedUsers[user];
                const targetSocket = req.connectedUsers[devId];

                if (loggedSocket) {
                    req.io.to(loggedSocket).emit('match', targetDev);
                }

                if (targetSocket) {
                    req.io.to(targetSocket).emit('match', loggedDev);
                }
            }

            loggedDev.likes.push(targetDev._id);

            await loggedDev.save();

            return res.json(loggedDev);
        } catch (e) {
            console.log(`Got error ${e}`);
            return res.status(400).json({ error: e })
        }
    }
};
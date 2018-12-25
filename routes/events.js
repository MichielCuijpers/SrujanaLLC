const Event = require('../models/Event');

module.exports = {
    getEvents: (req, res) => {
        Event
            .findAll()
            .then(events => {
                res.status(200).send(events);
            })
            .catch(() => res.sendStatus(500));
    },
    addEvent: (req, res) => {
        // const { title, logo, date } = req.body;
        const { title, logo } = req && req.body;
        const date = new Date();
        Event
            .create({
                title,
                logo,
                date
            })
            .then(res.sendStatus(200))
            .catch(error => console.log(error));
    }
};

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
        const { title, logo, eventDate } = req.body;
        Event
            .create({
                title,
                logo,
                date: eventDate
            })
            .then(res.sendStatus(200))
            .catch(error => console.log(error));
    }
};

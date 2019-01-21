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
        const { title, logo, eventDate, description } = req.body;
        const eventDescription = description || '';
        if (title) {
            Event
                .create({
                    title,
                    logo,
                    date: eventDate,
                    description: eventDescription
                })
                .then(res.sendStatus(200))
                .catch(error => console.log(error));
        }
        res.status(400).send('INVALID TITLE');
    },
    deleteEvent: (req, res) => {
        console.log('--- --- --- ---');
        console.log('delete REQ, params:', req.params);
        Event
            .destroy({
                where: { id: req.params.id }
            })
            .then(res.sendStatus(204))
            .catch(error => console.log(error));
    }
};

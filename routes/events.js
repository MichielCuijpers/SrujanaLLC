const express = require('express');
const db = require('../config/db');
const router = express.Router();
const Event = require('../models/Event');

module.exports = {
    getEvents: (req, res) => Event
        .findAll()
        .then(events => {
            console.log('Fetched Events:', events);
            res.status(200).send(events);
        })
        .catch(() => res.sendStatus(500))
};
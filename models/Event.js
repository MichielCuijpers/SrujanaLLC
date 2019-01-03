const Sequelize = require('sequelize');
const db = require('../config/db');

const Event = db.define('event', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    logo: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
});

// TODO: add description -> text (4/5 lines) ?

module.exports = Event;

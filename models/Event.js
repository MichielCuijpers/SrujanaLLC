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
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATE
    }
});

module.exports = Event;

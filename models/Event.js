const Sequelize = require('sequelize');
const db = require('../config/db');

const Event = db.define('event', {
    title: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
});

module.exports = Event;
const Sequelize = require('sequelize');
const CREDENTIALS = require('../creds');

module.exports = new Sequelize('srujana', CREDENTIALS.DB_USER, CREDENTIALS.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

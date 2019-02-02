const Sequelize = require('sequelize');

const POSTGRES = 'postgres';

const sequelize = process.env.DATABASE_URL ?
  new Sequelize(process.env.DATABASE_URL, {
    dialect: POSTGRES,
    protocol: POSTGRES
  })
  : new Sequelize('srujana', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: POSTGRES,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

module.exports = sequelize;

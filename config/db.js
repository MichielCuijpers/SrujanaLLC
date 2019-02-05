const Sequelize = require('sequelize');

const POSTGRES = 'postgres';

module.exports = new Sequelize(process.env.DATABASE_URL,{
  dialect: POSTGRES,
  protocol: POSTGRES,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

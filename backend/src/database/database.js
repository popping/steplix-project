const Sequelize = require('sequelize');

const db = new Sequelize('steplix', 'steplix', 'steplix', {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
    logging: false
});

module.exports = db;
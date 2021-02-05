const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.define('currencies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING
    },
    symbol: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'currencies',
    timestamps: false
});


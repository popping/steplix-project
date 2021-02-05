const Sequelize = require('sequelize');
const db = require('../database/database');
const Currency = require('./currency');
const format = require('date-format');

const Rate = db.define('Rate', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_currency: {
        type: Sequelize.INTEGER,
        references: {
            model: Currency,
            key: 'id'
        }
    },
    value: {
        type: Sequelize.FLOAT
    },
    created_at: {
        type: Sequelize.DATE,
        get() {
            return format.asString('yyyy-MM-dd hh:mm:ss', 
            this.getDataValue('created_at'));
        }
    }
}, {
    tableName: 'rates',
    timestamps: false
});

Rate.belongsTo(Currency, {foreignKey: {name: 'id_currency'}});

module.exports = Rate;
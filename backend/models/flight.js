const Sequelize = require('sequelize')
const sequelize = require('../db')

const Flight = sequelize.define("flight", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(6,2),
        allowNull: false,
    },
});

module.exports = Flight;
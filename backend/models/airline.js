const Sequelize = require('sequelize')
const sequelize = require('../db')

const Airline = sequelize.define("airline", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Airline;
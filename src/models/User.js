const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Country = require('./Country');

const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
   //countryId
});

User.belongsTo(Country)
Country.hasMany(User)

module.exports = User;
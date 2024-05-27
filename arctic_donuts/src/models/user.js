const { DataTypes } = require('sequelize');
const db = require('../database/conexion');
const { type } = require('@testing-library/user-event/dist/type');

const user = db.define('user', {
    user_mail: {
        type:DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    user_name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    user_lastname: {
        type:DataTypes.STRING,
        allowNull: false
    },
    user_password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    user_creditcardnum: {
        type:DataTypes.STRING,
        allowNull: false
    },

  }, {
    tableName: 'user',
    timeStamps: false
});

user.sync().then(() => {
    console.log('Tabla user ya funcional')
});

module.exports = user;
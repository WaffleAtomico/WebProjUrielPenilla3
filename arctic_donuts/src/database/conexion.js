/* import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:'); //kk esto
*/
import Sequelize from 'sequelize';

const Sequelize = require('sequelize');
const db = new Sequelize('arctic_donuts','root', '', 
{
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

db.authenticate().then(() => {
  console.log('Conexion correcta')
})

.catch((error) => {
  console.error('Error de conexion: ', error)
})

module.exports = db;
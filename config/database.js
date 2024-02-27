const Sequelize = require('sequelize');

module.exports = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'todo-express'
});
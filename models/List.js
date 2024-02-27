const Sequelize = require('sequelize');
const db = require('../config/database');

const User = require('./User');

const List = db.define('list', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  desc: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

List.belongsTo(User, { foreignKey: 'username' });

module.exports = List;

const Sequelize = require("sequelize");
const db = require("../config/database");
const User = db.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

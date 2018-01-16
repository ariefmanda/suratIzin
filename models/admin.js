'use strict';
module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    handphone: DataTypes.STRING,
    address: DataTypes.TEXT,
    photo: DataTypes.STRING,
    reset_token: DataTypes.STRING,
    reset_expired: DataTypes.DATE
  });
  return Admin;
};
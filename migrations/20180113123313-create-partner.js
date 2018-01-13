'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AdminId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      },
      handphone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.STRING
      },
      reset_token: {
        type: Sequelize.STRING
      },
      reset_expired: {
        type: Sequelize.DATE
      },
      photo_ic: {
        type: Sequelize.STRING
      },
      photo_wic: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('partners');
  }
};
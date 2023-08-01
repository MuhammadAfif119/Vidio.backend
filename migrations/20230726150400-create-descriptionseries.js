'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('descriptionseries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      series_id: {
        type: Sequelize.INTEGER
      },
      jumlah_episode: {
        type: Sequelize.INTEGER
      },
      descriptions: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      sutradara: {
        type: Sequelize.STRING
      },
      pemain: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('descriptionseries');
  }
};
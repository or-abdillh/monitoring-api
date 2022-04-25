'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
     await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      leaderEmail: {
        type: Sequelize.STRING
      },
      leaderName: {
        type: Sequelize.STRING
      },
      leaderPicture: {
        type: Sequelize.STRING
      },
      startAt: {
        type: Sequelize.DATE
      },
      finishAt: {
        type: Sequelize.DATE
      },
      progress: {
        type: Sequelize.INTEGER
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
    } catch(err) {
      console.log(err)
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('activities');
  }
};

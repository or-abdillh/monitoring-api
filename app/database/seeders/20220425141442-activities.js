'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('activities', [
      {
        title: 'Information System GIBS',
        client: 'SMA GIBS',
        leaderName: 'Fulan bin Fulan',
        leaderEmail: 'fulan123@gmail.com',
        leaderPicture: '/IMG-1650895949681.jpg',
        startAt: new Date(1650895949681),
        finishAt: new Date(1650895949999),
        progress: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

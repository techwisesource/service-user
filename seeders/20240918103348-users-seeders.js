'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profession: 'Admin micro',
        role: 'admin',
        email: 'semangatkoding@gmail.com',
        password: await bcrypt.hash("rahasia1234", 10), //10 is salt number
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Aryandhi',
        profession: 'Student micro',
        role: 'student',
        email: 'aryandhaw@gmail.com',
        password: await bcrypt.hash("rahasia1234", 10), //10 is salt number
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

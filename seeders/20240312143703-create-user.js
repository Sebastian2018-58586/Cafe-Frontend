'use strict';
const bcrypt=require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync();
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          name: 'Rosalba',
          surname: 'Rivera Sarasti',
          email: 'cafedecamporosita@gmail.com',
          password: bcrypt.hashSync("123456789",salt),
          phoneNumber: 3187957182,
          adress: 'La buitrera',
          image: null,
          idRole: 1,
        },
        {
          name: 'Juan Camilo',
          surname: 'Grosso Alomia',
          email: 'grosocamilocali@gmail.com',
          password: bcrypt.hashSync("123456789",salt),
          phoneNumber: 3222326252,
          adress: 'La buitrera',
          image: null,
          idRole: 2,
        },
        {
          name: 'Sonia',
          surname: 'Lopez',
          email: 'sonia@gmail.com',
          password: bcrypt.hashSync("123456789",salt),
          phoneNumber: 3235932442,
          adress: 'La buitrera',
          image: null,
          idRole: 3,
        },
      ],
      {}
    );
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

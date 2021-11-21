const { User } = require("../models");

const userData = [
  {
    username: "Mike",
    password: "Ekim",
  },
  {
    username: "tomm",
    password: "mott",
  },
  {
    username: "Rick",
    password: "Kcir",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

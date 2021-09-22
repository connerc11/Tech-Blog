const { User } = require('../models');

const userData = [
    {
    username:'Mike',
    password: 'Ekim'
},
{
    username: 'tomm',
    password: 'mott'

},
{
username: 'Rick',
passwor: 'Kcir'
}]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

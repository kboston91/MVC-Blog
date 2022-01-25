const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'kokopuffs',
    email: 'kgboston@yahoo.com',
    password: 'password1'
  },
  {
    username: 'thefairy75',
    email: 'carlalou@gmail.com',
    password: 'password1'
  },
  {
    username: 'choopy123',
    email: 'shalonda@hotmail.com',
    password: 'password1'
  },
  {
    username: 'beantown58',
    email: 'jboston@aol.com',
    password: 'password1'
  },
  {
    username: 'wabeaky67',
    email: 'suzette@msn.com',
    password: 'password1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
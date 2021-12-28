
   
const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'username1',
    email: 'user11@email.com',
    password: 'password123'
  },
  {
    username: 'username2',
    email: 'user12@email.com',
    password: 'password123'
  },
  {
    username: 'username3',
    email: 'user13@email.com',
    password: 'password123'
  },
  {
    username: 'username4',
    email: 'user14@email.com',
    password: 'password123'
  },
  {
    username: 'username5',
    email: 'user15@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
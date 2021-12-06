
   
const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'username1',
    email: 'user1@email.com',
    password: 'password123'
  },
  {
    username: 'username2',
    email: 'user2@email.com',
    password: 'password123'
  },
  {
    username: 'username3',
    email: 'user3@email.com',
    password: 'password123'
  },
  {
    username: 'username4',
    email: 'user4@email.com',
    password: 'password123'
  },
  {
    username: 'username5',
    email: 'user5@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
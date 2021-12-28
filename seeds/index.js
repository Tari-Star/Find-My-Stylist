
const seedUsers = require('./user-seeds');
const seedStylists = require('./stylist-seeds');
const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n------- DATABASE SYNCED -------\n');

  await seedUsers();
  console.log('\n------- USERS SEEDED -------\n');

  await seedComments();
  console.log('\n------- COMMENTS SEEDED-------\n');

  await seedPosts();
  console.log('\n------- POSTS SEEDED -------\n');

  await seedStylists();
  console.log('\n------- STYLISTS SEEDED -------\n');

  process.exit(0);
};

seedAll();

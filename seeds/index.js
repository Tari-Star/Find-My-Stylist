
const seedUsers = require('./user-seeds');
const seedCities = require('./city-seeds');
const seedServices = require('./service-seeds');
const seedStylists = require('./stylist-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n------- DATABASE SYNCED -------\n');

  await seedUsers();
  console.log('\n------- USERS SEEDED -------\n');

  await seedCities();
  console.log('\n------- CITIES SEEDED-------\n');

  await seedServices();
  console.log('\n------- SERVICES SEEDED -------\n');

  await seedStylists();
  console.log('\n------- STYLISTS SEEDED -------\n');

  process.exit(0);
};

seedAll();

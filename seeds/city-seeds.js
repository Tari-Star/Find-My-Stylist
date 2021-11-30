const sequelize = require('../config/connection');
const { City } = require('../models');

const citydata = [
    {name: 'Orlando'},
    {name: 'Tampa'},
    {name: 'West Palm Beach'},
]

const seedCities = () => City.bulkCreate(citydata, {individualHooks: true});

module.exports = seedCities;
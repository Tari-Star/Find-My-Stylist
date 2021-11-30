const { City } = require('../models');

const citydata = [
    {name: 'Orlando'},
    {name: 'Tampa'},
    {name: 'West Palm Beach'}
]

const seedCities = () => City.bulkCreate(citydata);

module.exports = seedCities;
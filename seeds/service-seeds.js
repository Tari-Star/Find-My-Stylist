const sequelize = require('../config/connection');
const { Service } = require('../models');

const servicedata = [
    {name: 'natural hair'},
    {name: 'color specialist'},
    {name: 'hair cut'},
    {name: 'formal'}
]

const seedServices = () => Service.bulkCreate(servicedata, {individualHooks: true});

module.exports = seedServices;
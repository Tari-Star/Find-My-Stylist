const { Service } = require('../models');

const servicedata = [
    {name: 'natural hair'},
    {name: 'color specialist'},
    {name: 'hair cut'},
    {name: 'formal'}
]

const seedServices = () => Service.bulkCreate(servicedata);

module.exports = seedServices;
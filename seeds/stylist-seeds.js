const { Stylist } = require('../models');

const stylistdata = [
  {
    first_name: 'First Name 1',
    last_name: 'Last Name 1',
    service_id: 1,
    city_id: 1,
    link_url: 'https://www.vagaro.com/enhancebraidingsalon/book-now'
  },
  {
    first_name: 'First Name 2',
    last_name: 'Last Name 2',
    service_id: 2,
    city_id: 1,
    link_url: 'https://www.vagaro.com/catalystsalon/book-now'
  },  
  {
    first_name: 'First Name 3',
    last_name: 'Last Name 3',    
    service_id: 2,
    city_id: 2,
    link_url: 'https://www.vagaro.com/ubucolorsalon/book-now'
  },  
  {
    first_name: 'First Name 4',
    last_name: 'Last Name 4',    
    service_id: 3,
    city_id: 2,
    link_url: 'https://www.vagaro.com/thelookbyregina/book-now'
  },  
  {
    first_name: 'First Name 5',
    last_name: 'Last Name 5',    
    service_id: 4,
    city_id: 3,
    link_url: 'https://www.vagaro.com/beyoutiful342/book-now'
  }
];

const seedStylists = () => Stylist.bulkCreate(stylistdata);

module.exports = seedStylists;
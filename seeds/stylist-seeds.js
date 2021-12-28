const { Stylist } = require('../models');

const stylistdata = [
  {
    username: 'User1',
    service: 'natural hair',
    city: 'Orlando',
    link_url: 'https://www.vagaro.com/enhancebraidingsalon/book-now',
    email: 'user1@gmail.com',
    password: 'pass1234'
  },
  {
    username: 'User2',
    service_id: "Highlights",
    city: 'Tampa',
    link_url: 'https://www.vagaro.com/catalystsalon/book-now',
    email: 'user2@gmail.com',
    password: 'pass1234'
  },  
  {
    username: 'User3',  
    service: 'color specialist',
    city: 'West Palm Beach',
    link_url: 'https://www.vagaro.com/ubucolorsalon/book-now',
    email: 'user3@gmail.com',
    password: 'pass1234'
  },  
  {
    username: 'User4',    
    service: 'haircut',
    city: 'Miami',
    link_url: 'https://www.vagaro.com/thelookbyregina/book-now',
    email: 'user4@gmail.com',
    password: 'pass1234'
  },  
  {
    username: 'User5',   
    service: 'formal',
    city: 'Jacksonville',
    link_url: 'https://www.vagaro.com/beyoutiful342/book-now',
    email: 'user5@gmail.com',
    password: 'pass1234'
  }
];

const seedStylists = () => Stylist.bulkCreate(stylistdata);

module.exports = seedStylists;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Stylist, City, Service } = require('../models');

//Render the home page
router.get('/', (req, res) => {
    Stylist.findAll({
        attributes: [
            'id',
           'username',
            'service_id',
            'city_id',
            'created_at',
          ],
          order: [[ 'created_at', 'DESC' ]],
          include: [
            {
                model: City,
                attributes: ['name']
            },
            {
                model: Service,
                attributes: ['title']
            }
          ] 
    })
    .then(dbStylistData => {
        const stylists = dbStylistData.map(stylist => stylist.get({ plain: true }));
        res.render('homepage', {
            stylists
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Render single stylist page
router.get('/stylist/:id', (req, res) => {
    Stylist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
          'id',
          'username',
          'service_id',
          'city_id',
          'created_at',
        ],
        include: [
          {
              model: City,
              attributes: ['name']
          },
          {
              model: Service,
              attributes: ['title']
          }
        ] 
    })
    .then(dbStylistData => {
        if (!dbStylistData) {
            res.status(404).json({ message: 'No stylist found with this id' });
            return;
          }
          const stylist = dbStylistData.get({ plain: true });
          res.render('single-stylist', {
            stylist
          });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Render login page. If user logged in, redirect to the home page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  // Render the sign up page.  If the user is logged in, redirect to the home page.
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  
  module.exports = router;
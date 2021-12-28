// A route to render the stylist dashboard page , only for logged in stylist
const router = require('express').Router();
const sequelize = require('../config/connection');

const {Stylist, Service, City} = require('../models');
const withAuth = require('../utils/auth');

// A route to render the stylist dashboard page , only for logged in stylist
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
              attributes: ['id', 'name']
          },
          {
              model: Service,
              attributes: ['title']
          }
        ] 
  })
  .then(dbStylistData => {
      const stylists = dbStylistData.map(stylist => stylist.get({ plain: true }));
      res.render('dashboard', {stylists, loggedIn: true});
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// edit single stylist page
router.get('/edit/:id', withAuth,(req, res) => {
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

module.exports = router;
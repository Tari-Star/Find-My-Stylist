const router = require('express').Router();
const sequelize = require('../config/connection');

const {Stylist, Service, City, Comment} = require('../models');
const withAuth = require('../utils/auth');

// A route to render the stylist dashboard page , only for logged in stylist
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Stylist.findAll({
        where: {
            stylist_id: req.session.stylist_id
        },
      attributes: [
        'id',
        'first_name',
        'last_name',
        'link_url'
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: City,
          attributes: ['id']
        },
        {
          model: Service,
          attributes: ['id']
        }
      ]
    })
      .then(dbStylistData => res.json(dbStylistData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Stylist.findOne({
        where: {
            stylist_id: req.session.stylist_id
        },
      where: {
        id: req.params.id
      },attributes: [
        'id',
        'first_name',
        'last_name',
        'link_url' 
      ],
      include: [
        {
          model: City,
          attributes: ['id']
        },
        {
          model: Service,
          attributes: ['id']
        }
      ]
    })
      .then(dbStylistData => {
        if (!dbStylistData) {
          res.status(404).json({ message: 'No stylist found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('edit-stylist', { post, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
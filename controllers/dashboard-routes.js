// A route to render the stylist dashboard page , only for logged in stylist
const router = require('express').Router();
const sequelize = require('../config/connection');

const {Stylist, Service, City, Post} = require('../models');
const withAuth = require('../utils/auth');

// A route to render the stylist dashboard page , only for logged in stylist
router.get('/', withAuth, (req, res) => {
  // Findl All Posts from database
  Post.findAll({
      where: {
          stylist_id: req.session.stylist_id
      },
      attributes: [
        "id", "post_text","service_id", "city_id", "link_url", "created_at"
      ],
      include: [
          {
              model: Stylist,
              attributes: ['username']
          },
          {
            model: City,
            attributes: ["name"],
          },
          {
            model: Service,
            attributes: ["title"],
          },
      ]
  })
  .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// Edit post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      stylist_id: req.session.stylist_id
  },
  attributes: [
    "id", "post_text","service_id", "city_id", "link_url", "created_at"
  ],
  include: [
      {
          model: Stylist,
          attributes: ['username']
      },
      {
        model: City,
        attributes: ["name"],
      },
      {
        model: Service,
        attributes: ["title"],
      },
  ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
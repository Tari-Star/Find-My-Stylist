const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Stylist, Comment } = require('../models');

//Render the home page
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ["id", "post_text","created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: Stylist,
          attributes: ["username","city", "service"]
        },
      ],
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Render single post page
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "post_text","created_at"],
        include: [
          {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
              model: User,
              attributes: ["username"],
            },
          },
          {
            model: Stylist,
            attributes: ["username","city", "service"]
          },
        ],
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          const post = dbPostData.get({ plain: true });
          res.render('single-post', {
            post
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
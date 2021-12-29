const router = require("express").Router();
const { Stylist, Post, Comment } = require("../../models");

const session = require('express-session');
const withAuth = require('../../utils/auth');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// get all stylists
router.get("/", (req, res) => {
  Stylist.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbStylistData) => res.json(dbStylistData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single stylist
router.get("/:id", (req, res) => {
  Stylist.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    }
  })
    .then((dbStylistData) => {
      if (!dbStylistData) {
        res.status(404).json({ message: "No stylist found with this id" });
        return;
      }
      res.json(dbStylistData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create New Stylist/ Signup
router.post("/", (req, res) => {
  Stylist.create({
    username: req.body.username,
    service: req.body.service,
    city: req.body.city,
    link_url: req.body.link_url,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbStylistData) =>  {
      req.session.save(() => {
        req.session.stylist_id = dbStylistData.id;
        req.session.username = dbStylistData.username;
        req.session.loggedIn = true;
  
        res.json(dbStylistData);
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


// Stylist login
router.post('/login', (req, res) => {
  // Find user if exist, by email
  Stylist.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbStylistData => {
    if (!dbStylistData) {
      res.status(400).json({ message: 'No stylist with that email address!' });
      return;
    }

    const validPassword = dbStylistData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.stylist_id = dbStylistData.id;
      req.session.username = dbStylistData.username;
      req.session.loggedIn = true;

      res.json({ stylist: dbStylistData, message: 'You are now logged in!' });
    });
  });
});

// Logout
router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
// update stylist info
router.put("/:id",withAuth, (req, res) => {
  // pass in req.body instead to only update what's passed through
  Stylist.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbStylistData) => {
      if (!dbStylistData[0]) {
        res.status(404).json({ message: "No stylist found with this id" });
        return;
      }
      res.json(dbStylistData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a stylist
router.delete("/:id", (req, res) => {
  Stylist.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStylistData) => {
      if (!dbStylistData) {
        res.status(404).json({ message: "No stylist found with this id" });
        return;
      }
      res.json(dbStylistData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

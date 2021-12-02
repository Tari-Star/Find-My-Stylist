const router = require('express').Router();
const { User, Stylist, Service, City } = require('../../models');

const session = require('express-session');
const withAuth = require('../../utils/auth');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// get all users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get single user
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// add user
router.post('/', withAuth, (req, res) => {
    User.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

 // update user info
 router.put('/:id', withAuth, (req, res) => {  
     // pass in req.body instead to only update what's passed through
     User.update(req.body, {
       individualHooks: true,
       where: {
         id: req.params.id
       }
     })
       .then(dbUserData => {
         if (!dbUserData[0]) {
           res.status(404).json({ message: 'No user found with this id' });
           return;
         }
         res.json(dbUserData);
       })
       .catch(err => {
         console.log(err);
         res.status(500).json(err);
       });
   });
 // delete a user
 router.delete('/:id', withAuth, (req, res) => {
     User.destroy({
       where: {
         id: req.params.id
       }
     })
       .then(dbUserData => {
         if (!dbUserData) {
           res.status(404).json({ message: 'No user found with this id' });
           return;
         }
         res.json(dbUserData);
       })
       .catch(err => {
         console.log(err);
         res.status(500).json(err);
       });
   });

module.exports = router;
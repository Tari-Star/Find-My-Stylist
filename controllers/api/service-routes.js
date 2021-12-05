const router = require('express').Router();
const { Service } = require('../../models');
const withAuth = require('../../utils/auth');

// get all services
router.get('/', (req, res) => {
    Service.findAll()
      .then(dbServiceData => res.json(dbServiceData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get single service
router.get('/:id', (req, res) => {
    Service.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbServiceData => {
        if (!dbServiceData) {
          res.status(404).json({ message: 'No service found with this id' });
          return;
        }
        res.json(dbServiceData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// add service
router.post('/', withAuth, (req, res) => {
    Service.create({
      title: req.body.title
    })
      .then(dbServiceData => res.json(dbServiceData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update service info
router.put('/:id', withAuth, (req, res) => {  
    // pass in req.body instead to only update what's passed through
    Service.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbServiceData => {
        if (!dbServiceData[0]) {
          res.status(404).json({ message: 'No service found with this id' });
          return;
        }
        res.json(dbServiceData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// delete a service
router.delete('/:id', withAuth, (req, res) => {
    Service.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbServiceData => {
        if (!dbServiceData) {
          res.status(404).json({ message: 'No service found with this id' });
          return;
        }
        res.json(dbServiceData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
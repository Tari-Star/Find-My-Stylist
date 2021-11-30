const router = require('express').Router();
const { Stylist, Service, City, User } = require('../../models');

// get all stylists
router.get('/', (req, res) => {
    console.log('======================');
    Stylist.findAll({
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

// get single stylist
router.get('/:id', (req, res) => {
    Stylist.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbStylistData => {
        if (!dbStylistData) {
          res.status(404).json({ message: 'No stylist found with this id' });
          return;
        }
        res.json(dbStylistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// add stylist
router.post('/', (req, res) => {
    Stylist.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city_id: req.body.city_id,
        service_id: req.body.service_id,
        link_url: req.body.link_url
    })
      .then(dbStylistData => res.json(dbStylistData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update stylist info
router.put('/:id', (req, res) => {  
    // pass in req.body instead to only update what's passed through
    Stylist.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbStylistData => {
        if (!dbStylistData[0]) {
          res.status(404).json({ message: 'No stylist found with this id' });
          return;
        }
        res.json(dbStylistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// delete a stylist
router.delete('/:id', (req, res) => {
    Stylist.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbStylistData => {
        if (!dbStylistData) {
          res.status(404).json({ message: 'No stylist found with this id' });
          return;
        }
        res.json(dbStylistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
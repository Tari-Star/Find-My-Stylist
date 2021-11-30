const router = require('express').Router();
const { City } = require('../../models');

// get all cities
router.get('/', (req, res) => {
    City.findAll()
      .then(dbCityData => res.json(dbCityData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get single city
router.get('/:id', (req, res) => {
    City.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbCityData => {
        if (!dbCityData) {
          res.status(404).json({ message: 'No city found with this id' });
          return;
        }
        res.json(dbCityData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// add city
router.post('/', (req, res) => {
    City.create({
      name: req.body.name
    })
      .then(dbCityData => res.json(dbCityData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update city info
router.put('/:id', (req, res) => {  
    // pass in req.body instead to only update what's passed through
    City.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbCityData => {
        if (!dbCityData[0]) {
          res.status(404).json({ message: 'No city found with this id' });
          return;
        }
        res.json(dbCityData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// delete a city
router.delete('/:id', (req, res) => {
    City.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCityData => {
        if (!dbCityData) {
          res.status(404).json({ message: 'No city found with this id' });
          return;
        }
        res.json(dbCityData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
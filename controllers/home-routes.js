const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    first_name: 'Darla',
    last_name: 'Beauty',
    service_id: 1,
    city_id: 1,
    link_url:'https://handlebars.js.com/guide/',
    user: {
      username: 'test_user'
    }
  });
});

module.exports = router;
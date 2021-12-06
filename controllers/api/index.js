const router = require('express').Router();
const userRoutes = require('./user-routes.js');
=======
const stylistRoutes = require('./stylist-routes.js');
>>>>>>> develop
const cityRoutes = require('./city-routes');
const serviceRoutes = require('./service-routes.js')
const stylistRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);
router.use('/services', serviceRoutes);
router.use('/stylists', stylistRoutes);

module.exports = router;

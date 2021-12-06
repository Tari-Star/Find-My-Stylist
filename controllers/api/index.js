const router = require('express').Router();

const stylistRoutes = require('./stylist-routes.js');
const cityRoutes = require('./city-routes');
const serviceRoutes = require('./service-routes.js')
const postRoutes = require('./post-routes.js');

router.use('/stylists', stylistRoutes);
router.use('/cities', cityRoutes);
router.use('/services', serviceRoutes);
router.use('/posts', postRoutes);

module.exports = router;

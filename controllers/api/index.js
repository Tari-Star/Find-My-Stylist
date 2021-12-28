const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const cityRoutes = require('./city-routes');
const serviceRoutes = require('./service-routes.js')
const stylistRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);
router.use('/services', serviceRoutes);
router.use('/stylists', stylistRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

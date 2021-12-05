const router = require('express').Router();
const apiRoutes = require('./api/');
<<<<<<< HEAD
const dashboardRoutes = require('./dashboard-routes.js')
=======
const homeRoutes = require('./home-routes.js');
>>>>>>> feature/frontEndTemplate

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api/');
const stylistDashboardRoutes = require('./stylist-dashboard-routes')

router.use('/api', apiRoutes);
router.use('/dashboard', stylistDashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

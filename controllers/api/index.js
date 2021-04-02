const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cart = require('./CartRoutes');

router.use('/users', userRoutes);

module.exports = router;

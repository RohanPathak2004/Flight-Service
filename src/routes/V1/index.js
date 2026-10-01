const express = require('express');

const router = express.Router();

const { InfoController } = require('../../controller')
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes');
const airportRoutes = require("./airport-routes");

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);

module.exports = router;
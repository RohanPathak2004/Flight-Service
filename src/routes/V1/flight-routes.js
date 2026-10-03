const express = require('express');
const  {FlightController}  = require('../../controller');
const router = express.Router();


router.post("/", FlightController.createFlight);

module.exports = router;
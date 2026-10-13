const express = require('express');
const  {FlightController}  = require('../../controller');
const router = express.Router();
const FlightMiddleware = require('../../middleware/flight-middleware');

router.post("/",FlightMiddleware.validateCreateFlight, FlightController.createFlight);
router.get("/", FlightController.getAllFlightsByQuery);
module.exports = router;
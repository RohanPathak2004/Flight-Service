const express = require('express');
const { AirportController } = require('../../controller');
const { AirportMiddleware } = require('../../middleware');
const router = express.Router();

router.get("/", AirportController.GetAllAirport);
router.get("/:id", AirportController.GetAirport);
router.post("/", AirportMiddleware.ValidateCreateAirport ,AirportController.CreateAirport);
router.delete("/:id", AirportController.DestroyAirport);
router.put("/:id", AirportController.UpdateAirport);

module.exports = router;

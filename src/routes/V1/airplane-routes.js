const express = require("express");
const { AirplaneController } = require("../../controller");
const { AirplaneMiddleware } = require("../../middleware/index");
const router = express.Router();

router.post(
      "/",
      AirplaneMiddleware.validateCreateRequest,
      AirplaneController.CreateAirplane,
);
router.get("/", AirplaneController.GetAirplanes);
router.get("/:id", AirplaneController.GetAirplaneById);
router.delete("/:id", AirplaneController.DestroyAirplane);
router.patch("/:id", AirplaneController.UpdateAirplane);
module.exports = router;

const express = require("express");
const { CityController } = require("../../controller");
const router = express.Router();

router.post("/", CityController.CreateCity);
router.get("/", CityController.GetAllCities);
router.get("/:id", CityController.GetCityById);
router.delete("/:id", CityController.DestroyCity);
router.put("/:id", CityController.updateCity);

module.exports = router;

const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.example).post("/add/flight", controller.addFlight);
router
  .get("/all/flights", controller.getAllFlight)
  .get("/single/flight/:id", controller.getSingleFlight);
router
  .delete("/delete/flight/:id", controller.deleteFlight)
  .put("/update/flight/:id", controller.updateFlight);
router.get("/*", controller.notFound);

module.exports = router;
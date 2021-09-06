const express = require("express");
const { check } = require("express-validator");

const restaurantsControllers = require("../controllers/restaurants-controller");

const router = express.Router();

router.get("/:id", restaurantsControllers.getRestaurantById);

router.get("/user/:uid", restaurantsControllers.getRestaurantsByUSerId);

router.post(
  "/",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  restaurantsControllers.createRestaurant
);

router.patch(
  "/:id",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  restaurantsControllers.updateRestaurant
);

router.delete("/:id", restaurantsControllers.deleteRestaurant);

module.exports = router;

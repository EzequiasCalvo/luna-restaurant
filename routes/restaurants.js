const express = require("express");

const router = express.Router();

const DUMMY_RESTAURANTS = [
  {
    id: "p1",
    title: "ASIAN",
    description: "amazing asian food",
    address: "local 123, New York",
    creator: "u1",
  },
];

router.get("/:id", (req, res, next) => {
  const restaurantId = req.params.id;
  const restaurant = DUMMY_RESTAURANTS.find((rest) => {
    return rest.id === restaurantId;
  });

  if (!restaurant) {
    const error = new Error("Could not find a restaurant for the provided id.");
    error.code = 404;
    return next(error);
  }
  res.json({ restaurant });
});

router.get("/user/:uid", (req, res, next) => {
  console.log("all good");
  const userId = req.params.uid;
  const restaurant = DUMMY_RESTAURANTS.find((rest) => {
    console.log(rest.creator);
    return rest.creator === userId;
  });
  if (!restaurant) {
    const error = new Error(
      "Could not find a restaurant for the provided user id."
    );
    error.code = 404;
    return next(error);
  }
  res.json({ restaurant });
});

module.exports = router;

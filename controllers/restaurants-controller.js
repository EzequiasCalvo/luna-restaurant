const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const getCoordsForAdress = require("../util/location");
const Restaurant = require("../models/restaurant");
const User = require("../models/user");

const getRestaurantById = async (req, res, next) => {
  const restaurantId = req.params.id;
  let restaurant;

  try {
    restaurant = await Restaurant.findById(restaurantId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a restaurant.",
      500
    );
    return next(error);
  }

  if (!restaurant) {
    const error = new HttpError(
      "Could not find a restaurant for the provided id.",
      404
    );
    return next(error);
  }
  res.json({
    restaurant: restaurant.toObject({
      getters: true,
    }),
  });
};

const getRestaurantsByUserId = async (req, res, next) => {
  console.log("all good");
  const userId = req.params.uid;
  let restaurants;
  try {
    restaurants = await Restaurant.find({ creator: userId });
  } catch (err) {
    const error = new HttpError(
      "Fetching restaurants failed, please try again later.",
      500
    );
    return next(error);
  }
  if (!restaurants || restaurants.length === 0) {
    return next(
      new HttpError(
        "Could not find  restaurants for the provided user id.",
        404
      )
    );
  }
  res.json({
    restaurants: restaurants.map((rest) => rest.toObject({ getters: true })),
  });
};

const createRestaurant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.isEmpty());
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAdress(address);
  } catch (error) {
    return next(error);
  }

  console.log(coordinates);
  const createdRestaurant = new Restaurant({
    title,
    description,
    address,
    location: coordinates,
    image:
      "https://i.picsum.photos/id/47/200/300.jpg?hmac=qgEtmhYzb3otRNnLN3afPLzmn6VJKj6x86OGOjDcBxQ",
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating restaurant failed, please try again.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("User not found", 500);
    return next(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    createdRestaurant.save({ session: session });
    user.restaurants.push(createdRestaurant);
    await user.save({ session: session });
    session.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating restaurant failed, please try again.",
      500
    );
    return next(error);
  }
  res.status(201).json({ restaurant: createdRestaurant });
};

const updateRestaurant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description } = req.body;
  const restaurantId = req.params.id;

  let restaurant;

  try {
    restaurant = await Restaurant.findById(restaurantId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update a restaurant.",
      500
    );
    return next(error);
  }

  restaurant.title = title;
  restaurant.description = description;

  try {
    await restaurant.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update a restaurant.",
      500
    );
    return next(error);
  }

  res.status(200).json({ restaurant: restaurant.toObject({ getters: true }) });
};

const deleteRestaurant = async (req, res, next) => {
  const restaurantId = req.params.id;

  let restaurant;

  try {
    restaurant = await Restaurant.findById(restaurantId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete a restaurant.",
      500
    );
    return next(error);
  }

  try {
    await restaurant.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete a restaurant.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted place." });
};

exports.getRestaurantById = getRestaurantById;
exports.getRestaurantsByUSerId = getRestaurantsByUserId;
exports.createRestaurant = createRestaurant;
exports.updateRestaurant = updateRestaurant;
exports.deleteRestaurant = deleteRestaurant;

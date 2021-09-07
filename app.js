const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const restaurantsRoutes = require("./routes/restaurants");
const usersRoutes = require("./routes/users");

const HttpError = require("./models/http-error");

const app = express();

app.use(express.json());

app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error ocurred!" });
});

mongoose
  .connect(
    "mongodb+srv://zequi:93737321@cluster0.6r5hx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("listening...");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

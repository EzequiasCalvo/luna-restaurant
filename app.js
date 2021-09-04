const express = require("express");
const bodyParser = require("body-parser");

const restaurantsRoutes = require("./routes/restaurants");

const app = express();

app.use("/api/restaurants", restaurantsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error ocurred!" });
});

app.listen(5000);

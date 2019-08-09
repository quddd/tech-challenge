const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const photoRoutes = require("./routes/photos");
const albumRoutes = require("./routes/albums");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/photos", photoRoutes);
app.use("/albums", albumRoutes);
app.use("/users", userRoutes);

//Error handling for invalid routes
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

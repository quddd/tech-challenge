const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res, next) => {
  request("https://jsonplaceholder.typicode.com/photos", function(
    error,
    response,
    data
  ) {
    if (!error && response.statusCode == 200) {
      console.log("All photos requested");
      res.send(JSON.parse(response.body));
    }
  });
});

router.get("/:photoId", (req, res, next) => {
  const id = req.params.photoId; //id of photo requested.
  request("https://jsonplaceholder.typicode.com/photos?id=" + id, function(
    error,
    response,
    data
  ) {
    if (!error && response.statusCode == 200) {
      console.log("All albums requested");
      res.send(JSON.parse(response.body));
    }
  });
});
module.exports = router;

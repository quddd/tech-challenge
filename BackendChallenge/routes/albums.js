const express = require("express");
const router = express.Router();
const request = require("request");

//mddleware function
router.get("/user:userId", (req, res, next) => {
  const userId = req.params.userId;
  request(
    "https://jsonplaceholder.typicode.com/users/1/albums?userId=" + userId,
    function(error, response, data) {
      if (!error && response.statusCode == 200) {
        console.log("All albums requested");
        res.send(JSON.parse(response.body));
      }
    }
  );
});

router.get("/:albumId", (req, res, next) => {
  const id = req.params.albumId; //album id request. Extract from request.params
  request("https://jsonplaceholder.typicode.com/albums?id=" + id, function(
    error,
    response,
    data
  ) {
    if (!error && response.statusCode == 200) {
      console.log(`Album id: ${id} requested.... `);
      res.send(JSON.parse(response.body));
    } else {
      res.status(400).json({
        message: "Album not found!"
      });
    }
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const request = require("request");
const db = require("../users.json"); //Database for our users

//console.log(db);

router.get("/", (req, res, next) => {
  request("https://jsonplaceholder.typicode.com/users", function(
    error,
    response,
    data
  ) {
    if (!error && response.statusCode == 200) {
      console.log("All users requested");
      res.send(JSON.parse(response.body));
    }
  });
});

/**For authentication
/* Assuming POST: {"id: id ", "username: username"}
**/
router.post("/auth", (req, res, next) => {
  const id = req.params.userId;
  const username = req.params.username;
  console.log(username);
  for (var i = 0; i < db.length; i++) {
    if (db[i].id == userId && db[i].username == username) {
      req.status(200).json({
        message: "Authentication Successful"
      });
    }
  }
});
module.exports = router;

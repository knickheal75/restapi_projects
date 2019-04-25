const express = require("express");
const app = express();
require("./DBConnect.js");
const axios = require("axios");
const bodyParser = require("body-parser");
require("jade");
const port = process.env.PORT || 3000;
const User = require("./models/user.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/views"));

app.set("view engine", "jade");

app.get("/", function(req, res, next) {
  res.render("index.jade");
});

app.post("/", async (req, res) => {
  const data = await axios
    .get("https://api.github.com/users/" + `${req.body.name}`)

    .then(function(response) {
      return {
        public_repos: `Repositories : ${response.data.public_repos}`,
        followers: `Followers : ${response.data.followers}`,
        following: `Following : ${response.data.following}`
      };
    })
    .catch(err => console.log(err));
  res.render("index", data);
});

app.post("/userpost", function(req, res) {
  var user = new User();
  user.public_repos = req.body.public_repos;
  user.following = req.body.following;
  user.followers = req.body.followers;
  user.save(function(err) {
    if (err) {
      throw err;
    } else {
      res.json({ Status: "Success" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

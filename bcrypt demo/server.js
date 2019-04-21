const express = require("express");
var app = express();
const bodyParser = require("body-parser");
require("./dbconnect");
var User = require("./models/User");
var bcrypt = require("bcrypt");

const port = process.env.PORT || 8080;
const saltRounds = 10;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/view"));

app.post("/", function(req, res) {
  var user = new User();
  user.email = req.body.email;
  const myPlaintextPassword = req.body.password;

  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);
  user.password = hash;

  user.save(function(err) {
    if (err) {
      throw err;
    }
    res.json({ Status: "Success" });
  });
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});

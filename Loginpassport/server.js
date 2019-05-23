const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./dbconnect");
var userSchema = require("./models/user");
var port = process.env.PORT || 8000;
const passport = require("passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/views"));

app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => res.send("welcome " + req.query.username));
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  user.findById(id, function(err, user) {
    cb(err, user);
  });
});

const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(function(username, password, done) {
    userSchema.findOne(
      {
        username: username
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success?username=" + req.user.username);
  }
);

app.listen(8000, () => {
  console.log(`Server running at ${port} port`);
});

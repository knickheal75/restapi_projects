const express = require("express");

const fs = require("fs");

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) console.log("Unable to append to server.log");
  });
  next();
});

// app.use((req, res) => {
//   res.render("maintenance.hbs");
// });

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("<h1>hello express</h1>");
  res.render("home.hbs", {
    pageTitle: "HOME PAGE",
    welcomeMessage: "welcome to home page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "about page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "unable to handle request"
  });
});
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

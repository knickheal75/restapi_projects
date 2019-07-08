const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found",
    name: "Todo App v1.0"
  });
});

app.get("/user", (req, res) => {
  res.send([
    {
      name: "nikhil",
      age: 28
    },
    {
      name: "aa",
      age: 22
    },
    {
      name: "ee",
      age: 25
    }
  ]);
});

app.listen(3000);

module.exports = {
  app
};

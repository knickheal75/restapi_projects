const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost:27017/github",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      throw err;
    }
    console.log("Database connected");
  }
);

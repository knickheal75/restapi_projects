const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost/passtest",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      throw err;
    }
    console.log("database connected");
  }
);

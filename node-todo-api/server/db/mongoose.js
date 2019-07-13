const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://nick:nick123@ds249233.mlab.com:49233/todolistapp" ||
    "mongodb://localhost:27017/TodoApp",
  {
    useNewUrlParser: true
  }
);

module.exports = { mongoose };

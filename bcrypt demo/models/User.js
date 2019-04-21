const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid email address "],
    unique: true
  },
  password: {
    type: String
    //match: [
    //^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    // "Please enter valid password"
    //]
  }
});

module.exports = mongoose.model("User", userSchema);

//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname

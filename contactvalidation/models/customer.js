const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const customerSchema = new Schema({
    Customer_Name: {
      type: String,
      required: [true, "Name is required"]
    },
    Customer_Mobile: {
      type: Number,
      required: [true, "Mobile number is required"],
      match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid mobile number"]
    },
    Customer_Email: {
        type: String,
        required: [true, "Email is required"],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter a valid email address"
        ]
    },
    Customer_Password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
        "Pasword should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      ]
    }
   });

module.exports = mongoose.model('Customer',customerSchema, 'details');


//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname

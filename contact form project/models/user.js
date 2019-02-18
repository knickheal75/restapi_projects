const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    Firstname : {
        type:String
    },
    Lastname : {
        type : String
    },
    Email : {
        type:String
    },
    Subject : {
        type : String

    },
    Message : {
        type : String

    }
    
});

module.exports = mongoose.model('User',userSchema, 'details');


//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname

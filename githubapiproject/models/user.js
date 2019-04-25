const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    public_repos: {
        type: String
    },
    following: {
        type : String
    },
   
    followers: {
    	type: String
    }

});

module.exports = mongoose.model('user',userSchema);

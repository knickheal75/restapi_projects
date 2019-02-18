const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://nikhil75:beckham231@ds139775.mlab.com:39775/contactform', function(err){
    if(err){
        throw err;
    }
    console.log("Database connected");
});
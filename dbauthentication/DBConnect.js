const mongoose = require("mongoose");

connection = mongoose.connect("mongodb://localhost:27017/seller",(err)=>{
    if(err){
        throw err;
    }
    console.log("Node JS Connected to Database");
});

module.exports = connection;

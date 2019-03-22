const mongoose=require("mongoose");

connection=mongoose.connect("mongodb://localhost:27017/postmandemo",{ useNewUrlParser: true },function(err){
    if (err){
        throw err;
    }
    console.log("db connected")
})

module.exports=connection;

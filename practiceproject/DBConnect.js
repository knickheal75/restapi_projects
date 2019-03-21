const mongoose=require("mongoose");

connection=mongoose.connect("mongodb://localhost:27017/adddb",{useNewUrlParser: true}, (err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
})

module.exports=connection;
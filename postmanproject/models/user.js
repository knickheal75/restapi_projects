const mongoose=require("mongoose");

const schema11=mongoose.Schema;

const userSchema=new schema11({
    name:{
        type:String
    },
    email:{
        type:String 
    }
})

module.exports=mongoose.model("User",userSchema,"users11")

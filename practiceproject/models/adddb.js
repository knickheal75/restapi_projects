const mongoose=require("mongoose")

const Schema22=mongoose.Schema;

const addSchema=new Schema22 ({
    a:{
        type:Number
    },
    b:{
        type:Number
    }
})

module.exports=mongoose.model("addModel",addSchema);
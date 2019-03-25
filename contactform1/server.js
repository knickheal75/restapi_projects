const express=require("express");
const app=express();
const bodyParser=require("body-parser");
require("./dbConnect");
const User=require("./models/user")
const path=require("path");
const port=process.env.PORT||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/views"));

app.post("/",function(req,res){
    var user=new User();

    user.name=req.body.name;
    user.email=req.body.email;
    user.phone=req.body.phone;
    user.message=req.body.message;

    user.save(function(err){
        if(err){
            throw err;
        }
        res.send(user);
    })
})

app.listen(port,function(err){
    if (err){
    throw err;
    }
    console.log(`server running at ${port}`);
});

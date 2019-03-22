const express=require("express");
const app=express();
const bodyparser=require("body-parser");
require ("./DBConnect")
const addModel=require("./models/adddb")
const path=require("path")

//including template engine
app.set('views',path.join(__dirname,"views/"))
app.set("view engine","jade")


//including bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/add.html")
})
//get the form 
app.post("/",function(req,res){
    const value={
        a:req.body.a,
        b:req.body.b

    }//creating object for model
    const sendtodb=new addModel(value)         //passing object to model
    sendtodb.save();
    //save to new object 
    //res.send(`inputs ${req.body.a},${req.body.b} are stored in database`);
    res.render(res.render('index', {a:value.a, b:value.b}))
})



app.listen(3000);

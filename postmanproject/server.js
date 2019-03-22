const express=require("express");
const app=express();

const bodyParser=require("body-parser");
require("./DBConnect");
const User=require("./models/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended:true}));

//getting data from mongodb
app.get("/",function(req,res){
    User.find({},function(err,users){
        if (err){
            throw err;
        }
        res.json(users)
    })
})

//posting or inserting data into mongodb
app.post("/",function(req,res){
    const user=new User();

    user.name=req.body.name;
    user.email=req.body.email;
    
    user.save(function(err){
        if (err){
            throw err;
        }
        res.json({"Status":"data saved successfully"});
    }) 
})

//deleting data from mongodb..note the email id representation

app.delete("/:id",function(req,res){
    User.remove({email:req.params.id},function(err){
        if(err){
            throw err;
        }
        res.json({"Status":"Successfully Deleted"});
    });

})

// updating on database on particular id
app.put("/:id",function(req,res){
    User.findById(req.params.id,function(err,user){
        if (err){
            throw err;
        }
        user.name=req.body.name;
        user.email=req.body.email;
        user.save(function(err){
            if (err){
                throw err;
            }
            res.json(user)  //particular user response in postman
        })
    })
})

//updating data for user using POST method

app.post("/:id",function(req,res){
    User.findById(req.params.id,function(err,user){
        if (err){
            throw err;
        }
        user.name=req.body.name;
        user.email=req.body.email;
        user.save(function(err){
            if (err){
                throw err;
            }
            res.json(user);
        })
    })
})

app.listen(3000,function(err){
    if (err){
        throw err;
    }
    console.log ("server running at port 3000");
})
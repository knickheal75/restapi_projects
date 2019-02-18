const express = require('express');
const bodyParser = require('body-parser');

var db = require('./dbconnect');
var User = require('./models/user');
const port=process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/",express.static(__dirname+"/main"));
//inserting data
app.post('/',function(req,res){
    var user = new User();

    user.Firstname = req.body.fname;
    user.Lastname = req.body.lname;
    user.Email = req.body.email;
    user.Subject = req.body.subject;
    user.Message = req.body.message;

    user.save(function(err){
        if(err){
            throw err;
        }
        res.json({"Status":"Success"});
    });
});

//Fetching data from MongoDB

app.get('/',function(req,res){
    User.find({},function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

//Deleting data from MongoDB

app.delete('/:id',function(req,res){
    User.remove({Lastname:req.params.id},function(err){
        if(err){
            throw err;
        }
        res.json({"Status":"Successfully Deleted"});
    });
});

//Updating data



app.put('/:id',function(req,res){
    User.findById(req.params.id,function(err,user){
        if(err){
            throw err;
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.save(function(err){
            if(err){
                throw err;
            }
            res.json(user); // Gives response in JSON to Postman
            console.log("Data Updated Successfully"); //Updates in the local server console

        });
    });
});


//Updating Data using POST Method


app.post('/:id',function(req,res){
    User.findById(req.params.id,function(err,user){
        if(err){
            throw err;
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.save(function(err){
            if(err){
                throw err;
            }
            res.json(user); // Gives response in JSON to Postman
            console.log("Data Updated using POST method Successfully"); //Updates in the local server console

        });
    });
});



app.listen(port,function(err){
    if(err){
        throw err;
    }
    console.log("Server is Running at 8080 port!")
});
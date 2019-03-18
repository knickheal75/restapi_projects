const express = require('express');
const bodyParser = require('body-parser');

var db = require('./dbconnect');
var Customer = require('./models/customer');
const port=process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("main"));
//inserting data

app.post('/',function(req,res){
    var customer = new Customer();

    customer.Customer_Name = req.body.cname;
    customer.Customer_Mobile = req.body.mobile;
    customer.Customer_Email = req.body.email;
    customer.Customer_Password = req.body.password;
    

    customer.save(function(err){
        if(err){
            throw err;
        }
        res.json({"Status":" Success"});
    });
});

//Fetching data from MongoDB

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/main','index.html'));
});

//Deleting data from MongoDB

app.delete('/:id',function(req,res){
    Customer.remove({Customer_Mobile:req.params.id},function(err){
        if(err){
            throw err;
        }
        res.json({"Status":" Successfully Deleted"});
    });
});

//Updating data



app.put('/:id',function(req,res){
    Customer.findById(req.params.id,function(err,user){
        if(err){
            throw err;
        }
        customer.name = req.body.cname;
        customer.number=req.body.number;
        customer.email = req.body.email;
        customer.save(function(err){
            if(err){
                throw err;
            }
            res.json(customer); // Gives response in JSON to Postman
            console.log("Data Updated Successfully"); //Updates in the local server console

        });
    });
});


//Updating Data using POST Method


app.post('/:id',function(req,res){
    User.findById(req.params.id,function(err,customer){
        if(err){
            throw err;
        }
        customer.Customer_Name = req.body.cname;
        customer.Customer_Mobile = req.body.mobile;
        customer.Customer_Email = req.body.email;
        customer.Customer_Password = req.body.password;
    
    
        customer.save(function(err){
            if(err){
                throw err;
            }
            res.json(customer); // Gives response in JSON to Postman
            console.log("Data Updated using POST method Successfully"); //Updates in the local server console

        });
    });
});



app.listen(port,function(err){
    if(err){
        throw err;
    }
    console.log(`Server is Running at ${port}`);
});

const express=require("express");
const app=express();
const bodyParser=require("body-parser");
require("./dbConnect");
const User=require("./models/user");
require("path");
const port=process.env.PORT||3000;
const nodemailer=require("nodemailer");
const Email="blitzkrieg0705@gmail.com"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/views"));

app.post("/",function(req,res){
    var user=new User();

    user.name=req.body.name;
    user.email=req.body.email;
    user.phone=req.body.phone;
    user.message=req.body.message;
    
   
    
    //NODEMAILER DOCUMENTTION START
    
let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: Email, // check top
          pass: "positron0705" //ENTER THE PASSWORD HERE
        }
      });

let mailOptions = {
        from: `"Nikhil Mind" <${Email}>`, // sender address
        to: "blitzkrieg0705@gmail.com, `${req.body.email}`", // list of receivers
        subject: "contact info", // Subject line
        text: "How are you", // plain text body
        html: `<b>Contact Information </b> <hr> <h2>name:` + req.body.name+`<hr>phone:`+req.body.phone+`<hr>email:`+req.body.email+
        `<hr>message:`+req.body.message+`</h2>`
      };

      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error)
        }
        console.log('message sent: %s', info.messageId);
    })
    
    user.save(function(err){
      if(err){
          throw err;
      } res.send(user);
  })
  

  })




  app.get('/',function(req,res){

    User.find({},function(err,users){
          if(err){
              throw err;
          }
          res.json(users);
    });
  });





  app.listen(port,function(err){
    if (err){
    throw err;
    }
    console.log(`server running at ${port}`);
});


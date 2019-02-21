const express=require('express');
const app=express();

app.use(express.static(__dirname + '/view'));

app.listen(8080,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is Running at 8080 port!");
});

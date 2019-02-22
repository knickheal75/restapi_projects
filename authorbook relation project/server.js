const express=require ("express");
const mongoose=require ("mongoose");
const bodyparser=require("body-parser");
const dbconnect=require("./DBConnect");
const port=process.env.port || 1234;
const app = express();

const bookroute = require('./routes/books');
const authorroute = require('./routes/authors');
app.use(bodyparser.json());







app.use("/",bookroute);
app.use('/',authorroute);

app.listen(port,(err)=>{
    if(err)
        throw err
    console.log(`Server is started ${port}`);
});

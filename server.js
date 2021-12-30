//nodejs
//import the node modules
// express js
// mongodb
//cors

//require function is used to import the nodemodules

 const express = require("express");

 const cors = require("cors");

 const mongodb = require("mongodb");
const { response } = require("express");


 //create the rest object

 const app=  express();   

 //where app is the rest object
// where app object is used to develop the restApis


//enable the cors policy
app.use(cors());




//set the json as mime type
app.use(express.json());




//create the client object
// client object is used to connect the database


const ashokIT = mongodb.MongoClient;

//where  "ashokIT" is the Client object





//rest apis

app.get("/components",(req,res)=>{

    ashokIT.connect("mongodb+srv://admin:admin123@angular-13.yffi1.mongodb.net/Angular13?retryWrites=true&w=majority"
    ,(err,connection)=>{
       
        if(err) throw err;
        else{
           const db =  connection.db("Angular13");
           db.collection("components").find().toArray((err,array)=>{
                     
              if(err) throw err;
              else{
                  res.send(array);
              }
           })
        }

    });
});


//assign the port number
app.listen(8600,()=>{
    console.log("node server running on the port number 8600");
});




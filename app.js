const express = require("express");
const path = require("path");
const app=express();

const port=80;

//EXPRESS SPECIFIC STUFF..
app.use('/static',express.static('static'));

//PUG SPECIFIC STUFF
app.set('biew engine','pug');// set the engine as pug 
app.set('views',path.join(__dirname,'views'));// set  view directory


//ENDPOINT
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})

app.listen(port, ()=>{
    console.log(`The application startd succesfully on port ${port}`);
})
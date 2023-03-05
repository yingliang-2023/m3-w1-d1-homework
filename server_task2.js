const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => {

 res.sendFile(__dirname+"/home.html");
});

app.get('/:url', (req, res) => {
   
    console.log("The NodeJS server on port 5000 is now running");
    
    var url = req.params.url;

    if(url === "about"){
        res.sendFile(__dirname+'/about.html');
    }else if(url === "contact"){
        res.sendFile(__dirname+'/contact.html');
    }else{
        res.sendFile("<h1>Invalid Request!</h1>");
    }
    
    
    
    
});



app.listen(4000);
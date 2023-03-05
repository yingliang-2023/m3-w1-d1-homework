const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => {

 res.send("<h1>Home page</h1>");
});

app.get('/:url', (req, res) => {
   
    console.log("The NodeJS server on port 5000 is now running");
    
    var url = req.params.url;
    if(url === "about"){
        res.send("<h1>About page</h1>");
    }else if(url === "contact"){
        res.send("<h1>Contact page</h1>");
    }else{
        res.send("<h1>Invalid Request!</h1>");
    }
    
    
    
    
});









app.listen(4000);
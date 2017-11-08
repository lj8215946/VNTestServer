const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const index = express();

//middleware
const logger = function(req, res, next){
    console.log('req');
    next();
}
index.use(logger);
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({extended: false}));

//set static path
index.use(express.static(path.join(__dirname, 'public')));

index.get('/', function(req, res){
    res.send('Hello World');
})

index.listen(3000, function(){
    console.log('server started on port 3000');
})
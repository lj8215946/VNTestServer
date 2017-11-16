const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongojs = require('mongojs')
// const db = mongojs('vntestserver', ['vntestcollection'])
// const ObjectId = mongojs.ObjectId

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

// index.get('/user', function(req, res){
//     db.vntestcollection.find(function (err, docs) {
//         if(err){
//             console.log(err);
//         } 
//         res.send(docs);
//     })
// })

// index.get('/user/add', function(req, res){

//     var newUser = {first_name: req.query.first, last_name: req.query.last,email: req.query.email};
//     console.log('newUser:' + newUser);

//     console.log('req.params:' + req.params);
//     console.log('req.body:' + req.body);
//     console.log('req.query:' + req.query);
//     db.vntestcollection.insert(newUser,function(err, result){
//         res.send(result);
//     });
// })

// index.post('/user/add', function(req, res){
    
//         var newUser = {first_name: req.body.first, last_name: req.body.last,email: req.body.email};
//         console.log('newUser:' + newUser);
    
//         console.log('req.params:' + req.params);
//         console.log('req.body:' + req.body);
//         console.log('req.query:' + req.query);
//         db.vntestcollection.insert(newUser,function(err, result){
//             res.send(result);
//         });
//     })

// index.get('/user/delete/:id', function(req, res){
        
//         var userID = req.params.id;
//         console.log('userID:' + userID);
        
//         console.log('req.params:' + req.params);
//         console.log('req.body:' + req.body);
//         console.log('req.query:' + req.query);
//         db.vntestcollection.remove({_id:ObjectId(userID)},function(err, result){
//             res.send(result);
//         });
//     })

// index.post('/user/delete', function(req, res){
        
//         var userID = req.body.id;
//         console.log('userID:' + userID);
        
//         console.log('req.params:' + req.params);
//         console.log('req.body:' + req.body);
//         console.log('req.query:' + req.query);
//         db.vntestcollection.remove({_id:ObjectId(userID)},function(err, result){
//             res.send(result);
//         });
//     })

index.listen(3000, function(){
    console.log('server started on port 3000');
})
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongojs = require('mongojs')
// const db = mongojs('vntestserver', ['vntestcollection'])
// const ObjectId = mongojs.ObjectId

const index = express();

//middleware
const logger = function (req, res, next) {
    console.log('req');
    next();
}
index.use(logger);
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({
    extended: false
}));

//set static path
index.use(express.static(path.join(__dirname, 'public')));

index.get('/', function (req, res) {
    res.send('Hello World');
})

index.get('/data/VNChannelData', function (req, res) {
    var channelData = {
        "errCode": 0,
        "hasNextPage": false,
        "pageContext": "_1",
        "listData": [{
            "cellType": "bigPoster",
            "url": "http://puui.qpic.cn/tv/0/16195733_1080607/0",
            "firstLine": "蓝色星球 第二季",
            "secondLine": "展示简易版视频首屏实现，包括下拉刷新，分页加载，换一批等功能"
        }, {
            "cellType": "titlePoster",
            "firstLine": "精彩电视剧"
        }, {
            "cellType": "timePoster",
            "firstLine": "VN为您报时",
            "secondLine": new Date().toTimeString()
        }, {
            "cellType": "contentPoster",
            "url": "http://puui.qpic.cn/vpic/0/o0500ekuesl.png/0",
            "firstLine": "前几天订购的奔驰到货，掀开车布后感觉一切都值得！"
        }, {
            "cellType": "contentPoster",
            "url": "http://puui.qpic.cn/vpic/0/x05655hyc2l.png/0",
            "firstLine": "李连杰演坏人，最帅的一次！"
        }, {
            "cellType": "contentPoster",
            "url": "http://puui.qpic.cn/vpic/0/z0562zvchuh.png/0",
            "firstLine": "《战狼3》龙小云强势回归，冷锋会怎么选？"
        }, {
            "cellType": "contentPoster",
            "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
            "firstLine": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
        }, {
            "cellType": "contentPoster",
            "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
            "firstLine": "超能对决，雷神大战超人，雷神高傲被痛扁"
        }]
    };
    
    res.json(channelData);
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

index.listen(3000, function () {
    console.log('server started on port 3000');
})
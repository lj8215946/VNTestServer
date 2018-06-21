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

index.post('/data/postTest' , function (req, res) {
    var dataReceived = req.body;
    console.log("postTest:" + JSON.stringify(dataReceived));
    console.log("postTest:" + dataReceived.time.hour);
    res.json(dataReceived);
});

index.get('/', function (req, res) {
    res.send('Hello World');
})

var VNChannelDataFirstPageDateIsOdd = false;

index.get('/data/VNChannelData', function (req, res) {
    var pageContext = req.query.pageContext;
    var channelID = req.query.channelID;
    var channelData = null;
    console.log(pageContext);

    if ((!pageContext || 0 === pageContext.length)) {

        if (channelID == '2') {
            channelData = {
                "errCode": 0,
                "hasNextPage": true,
                "pageContext": "_1",
                "listData": [{
                    "cellType": "bigPoster",
                    "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
                    "firstLine": "我们都是程序员 第二季",
                    "secondLine": "欧美电影里的女神都在这里了 你认识几个"
                }, {
                    "cellType": "titlePoster",
                    "firstLine": "精彩综艺节目"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/e0024v1uiq3.png/0",
                    "firstLine": "习近平等领导同志亲切会见出席党的十九大代表 特邀代表和列席人员！"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/j0014p4asib.png/0",
                    "firstLine": "天天看：第336期 乞丐强迫8女子生12个孩子乞讨"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/q0546h6ghvc.png/0",
                    "firstLine": "她们绝对不是花瓶，那些让人热血沸腾的欧美电影女英雄"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/q05231zuf0f.png/0",
                    "firstLine": "国外牛人自制“神奇女侠盾”，外形超像功能神似！"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/x05465hpg1l.png/0",
                    "firstLine": "神奇女侠在速度与激情里这么表演，有内涵"
                }]
            };
        } else if (channelID == '3') {
            channelData = {
                "errCode": 0,
                "hasNextPage": true,
                "pageContext": "_1",
                "listData": [{
                    "cellType": "bigPoster",
                    "url": "http://puui.qpic.cn/vpic/0/a0567avfr82.png/0",
                    "firstLine": "能否不加班 第十八季",
                    "secondLine": "耗资500万！成龙电影最贵的一个镜头，20年无人敢模仿！"
                }, {
                    "cellType": "titlePoster",
                    "firstLine": "最后一个频道了"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
                    "firstLine": "没想到成龙还有这段镜头 全程笑点不断"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
                    "firstLine": "超能对决，雷神大战超人，雷神高傲被痛扁"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
                    "firstLine": "《战狼3》龙小云强势回归，冷锋会怎么选？"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/tv/0/16040505_498280/0",
                    "firstLine": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
                }, {
                    "cellType": "contentPoster",
                    "url": "http://puui.qpic.cn/tv/0/16040463_498280/0",
                    "firstLine": "超能对决，雷神大战超人，雷神高傲被痛扁"
                }]
            };
        } else {
            VNChannelDataFirstPageDateIsOdd = !VNChannelDataFirstPageDateIsOdd;
            if (VNChannelDataFirstPageDateIsOdd) {
                channelData = {
                    "errCode": 0,
                    "hasNextPage": true,
                    "pageContext": "_1",
                    "listData": [{
                        "cellType": "bigPoster",
                        "url": "http://puui.qpic.cn/tv/0/16195733_1080607/0",
                        "firstLine": "蓝色星球 第二季",
                        "secondLine": "展示简易版视频首屏实现，包括下拉刷新，分页加载，换一批等功能"
                    }, {
                        "cellType": "timePoster",
                        "firstLine": "VN为您报时(点我刷新)",
                        "secondLine": new Date().toTimeString()
                    }, {
                        "cellType": "titlePoster",
                        "firstLine": "精彩电视剧"
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
            } else {
                channelData = {
                    "errCode": 0,
                    "hasNextPage": true,
                    "pageContext": "_1",
                    "listData": [{
                        "cellType": "bigPoster",
                        "url": "http://puui.qpic.cn/tv/0/16190755_330185/0",
                        "firstLine": "龙猫 第一季",
                        "secondLine": "短尾毛丝鼠体型较大，体长30～38cm，尾长10cm左右；长尾毛丝鼠体型较小，体长24～28cm，尾长14～15cm。 一般雌鼠体重510～710g，雄鼠体重425～570g。前半身似兔，后半身似鼠，耳大钝圆，尾毛蓬松。眼睛明亮，鼻端两侧有许多长须。标准毛丝鼠皮毛呈蓝灰色，腹部渐淡至白色，腹中部有分界明显的白色带。"
                    }, {
                        "cellType": "timePoster",
                        "firstLine": "VN为您报时",
                        "secondLine": new Date().toTimeString()
                    }, {
                        "cellType": "titlePoster",
                        "firstLine": "精彩综艺"
                    }, {
                        "cellType": "contentPoster",
                        "url": "http://puui.qpic.cn/tv/0/16200462/0",
                        "firstLine": "VideoNative功能简介"
                    }, {
                        "cellType": "contentPoster",
                        "url": "http://puui.qpic.cn/tv/0/16196364_680382/0",
                        "firstLine": "李连杰演坏人，最帅的一次！"
                    }, {
                        "cellType": "contentPoster",
                        "url": "http://puui.qpic.cn/tv/0/16140838_680382/0",
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
            }
        }



    } else {
        channelData = {
            "errCode": 0,
            "hasNextPage": false,
            "pageContext": "_2",
            "listData": [{
                    "cellType": "titlePoster",
                    "firstLine": "这是第二页数据"
                }, {
                    "cellType": "bigPoster",
                    "firstLine": "魔鬼鱼一言不合就上天",
                    "secondLine": "水中上演“荧光芭蕾”",
                    "url": "http://puui.qpic.cn/tv/0/16040491_498280/0"
                },
                {
                    "cellType": "contentPoster",
                    "firstLine": "虎鲸用尾巴抽打鱼群",
                    "secondLine": "史上最强“巴掌”",
                    "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
                },
                {
                    "cellType": "contentPoster",
                    "firstLine": "伪虎鲸群围猎海豚",
                    "secondLine": "结局逆转太意外",
                    "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
                },
                {
                    "cellType": "contentPoster",
                    "firstLine": "总是吃不饱的海参",
                    "secondLine": "大胃王！看起来好饿",
                    "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
                },
                {
                    "cellType": "contentPoster",
                    "firstLine": "这种鱼长着长着变性了",
                    "secondLine": "而且还是一夫多妻制！",
                    "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
                },
                {
                    "cellType": "contentPoster",
                    "firstLine": "大鱼跃出水面捕食飞鸟",
                    "secondLine": "这鱼太挑食了！",
                    "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
                }
            ]
        };
    }





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
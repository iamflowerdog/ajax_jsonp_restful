/**
 * Created by yangy on 2017/8/24.
 * Represent State Transfer
 */

// Representational State Transfer 表述性状态传递

let express = require('express');
let app = express();

let fs = require('fs');

app.get('/list', function (req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function (err, data) {
        //console.log(data);
        res.end(data);
    } )
});


// 创建默认首页，重定向到 /list 路由地址
app.get('/', function (req, res) {
    res.redirect('/list');
});
// 添加新用户

let user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

app.get('/addUser', function (req, res) {

    // 读取已经存在的数据
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        //console.log( data );
        res.end( JSON.stringify(data));
    });
});

// 显示用户详情

app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        let user = data["user" + req.params.id];
        //console.log( user );
        res.end( JSON.stringify(user));
    });
});


let server = app.listen(8081, function () {
    console.log('服务器创建成功');
});

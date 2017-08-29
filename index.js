/**
 * Created by yangy on 2017/6/23.
 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(express.static("public"));

app.get("/testAjax", (req, res) => {

    let name = req.query.name;
    let password = req.query.password;

    console.log(`get请求发送的 ${name},已经收到`);

    res.send(`${name},你的get请求已经收到`);

});

//添加一个post路由，来接收请求
app.post("/testAjax", (req, res) => {

    let name = req.body.name;
    let password = req.body.password;
    console.log(name, password);
    res.send("post相应已经收到");

});
//添加一个jQuery路由，来接收请求
app.get("/testJQuery", (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    console.log(`${username},服务器已经收到`);
    res.send({status: "ok"});
});

//添加一个JsonP测试路由
app.get("/JsonP", (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    //res.send(`${username},服务器已经收到`);
    //res.send({JsonP:"test"})
    //res.send("alert('JsonP form')");
   // username = JSON.stringify(username);
   // res.send(`alert(${username})`);
    //res.send("testJsonP('"+"hello"+"')");
    //res.send("testJsonP('hello')");
    let callback = req.query.callback;

    let user = {name: username, age: 78};


    user = JSON.stringify(user);

    res.send(`testJsonP()`);

   // res.send(`callback('${user}')`);

});





app.listen(3000, () => {
    console.log("大哥，你的ajax服务器已经创建成功");
});
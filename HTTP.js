/**
 * Created by yangy on 2017/8/24.
 */

let http = require('http');
let url = require('url');
let util = require('util');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // 解析 url 参数


    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

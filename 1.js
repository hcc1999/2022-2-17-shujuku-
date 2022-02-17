//引入模块
const fs = require("fs");
const http = require("http");
const pash = require("path");
// 创建服务器对象
const app = http.createServer();
//监听端口并启动服务器
app.listen(3000,()=>{
    console.log("服务器启动成功");
})
//注册事件监听请求
app.on("request",(req,res)=>{
    fs.readFile(pash.join(__dirname,'1.html'),"utf-8",(err,data)=>{
        if(err) return console.log(err.message);
        res.end(data);
    })
})

const fs = require("fs");
const path = require("path");
const http = require("http");

const app = http.createServer();

app.listen(4000,()=>{
    console.log("服务器启动成功");
})

app.on("request",(req,res)=>{
    fs.readFile(path.join(__dirname,'1.html'),'utf8',(err,data)=>{
        if(err) return console.log(err.message);
        res.end(data);
    })
    console.log("有人访问了");
})
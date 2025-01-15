var fs=require("fs")
var http = require("http")
var path = require("path")
var url = require("url")
 http.createServer((req,res)=>{
    if(req.url==="/favicon.ico"){
        res.end("ggk")
    }
    else{
        var hi=fs.readFileSync(path.basename(req.url))
        res.end(hi.toString())
    }
    }).listen(8000)


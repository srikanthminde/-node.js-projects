// var fs=require("fs")
// var http = require("http")
// var path = require("path")
// var url = require("url")
//  http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("this is router req")
//     }
   
//     if(req.url==="/form.html"){
//         fs.readFileSync(path.basename(req.url))
//             console.log(path)
//             res.end("this is file req ")
//     }
        
//     }).listen(4500)


// var fs=require("fs")
// var http = require("http")
// var path = require("path")
// var url = require("url")
//  http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("this is router req")
//     }
   
//     else{
//         if(req.url==="/form.html"){
//             var d=fs.readFileSync()
//             res.end("this something")
//         }
//         else{
//             res.end(`<img src="https://miro.medium.com/max/3840/1*Gid6GfUT9l9qStTNtrfeDw.jpeg"/>`)
//         }
//     }
//     }).listen(4600)

var fs=require("fs")
var http = require("http")
const path = require("path")
var url = require("url")
const students = require("./students")
 http.createServer((req,res)=>{
    if(req.url==="/students"){
        // res.end(JSON.stringify(students))
    var tb=""
    for(var i=0 ;i<=students.length-1;i++){
        var tb =tb+`
       
        <tr>
        
        <td>${students[i].firstName}</td>
        <td>${students[i].lastName}</td>
        <td>${students[i].age}</td>
        </tr>
        `
    }
    res.end(`<table border=2> ${tb}</table>`)
    }

    if(req.url==="/ed"){
        res.end("Edupoly")
    }   
    else{
         fs.readFile(path.basename(req.url),function(err,data){
            if(err){
                res.setHeader('Content-Type','text/html')
                res.end(`<img src="https://www.wallpaperflare.com/static/234/853/187/radiation-radioactive-digital-art-green-wallpaper-preview.jpg"/>`)
            }
            else{
                res.end(data.toString())
            }
         })
    }
    
    var students = require("./students")
    // console.log(d)

    if(req.url==(`/${students.firstName}`)){
        console.log(students.firstNamefirstName)
    }
        // console.log(firstName)
    

    }).listen(7500)



    
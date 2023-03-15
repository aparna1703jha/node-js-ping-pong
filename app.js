const http = require("http");

const server = http.createServer((req, res) => {
    
    if(req.url == "/"){
        res.end("testing")
    }
    else if(req.url == "/ping"){
        res.end("pong")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 error page</h1>")

    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port")
});
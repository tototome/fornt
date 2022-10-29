const http=require('http')
// 也是异步函数
http.createServer(function (request,repsonse){
    repsonse.writeHead(200,{'Content-Type': 'text/html'})

    repsonse.end('<h1>hello world</h1>')
}).listen(9999)

console.log('run http://localhost:9999')
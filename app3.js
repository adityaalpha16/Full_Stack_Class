let http=require('http');
let server=http.createServer((req,res)=>{
    res.statusCode=201;
    res.write("learning http server")
    res.end();
})
server.listen(3000,()=>{
    console.log('server is running on port 3000');
})
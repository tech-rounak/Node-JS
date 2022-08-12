const express=require('express');
const app=express();
const http=require('http').createServer(app);
app.use(express.static(__dirname+'/public'));
app.get("/",(req,res)=>
{
    res.render('index.html');
})
http.listen(3000,()=>{
    console.log('Server is running at port 3000');
})
//Socket Programming
const io=require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('Connected');
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg);
    });
})
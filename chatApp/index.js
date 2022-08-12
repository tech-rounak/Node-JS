const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('welcome')
})
app.listen(3000,()=>{
    console.log("Server is running at port 300");
})

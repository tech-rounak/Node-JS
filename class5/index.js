const express=require('express');
const student=require('./student');
const fs=require('fs');
const app =express();
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    // console.log(student);
    res.render('home',{data : student});
})
app.get('/quiz',(req,res)=>{
    fs.readFile('sample.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data);
            console.log(data);
            data=data.questions;
            res.render('quiz',{data : data})
        }
    })
})
app.listen(3000,()=>{
    console.log("Server is running at 3000");
})
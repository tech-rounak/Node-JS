const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    },
})
const app = express();
app.set('view engine','ejs');
const upload=multer({storage:storage})
app.post('/',upload.single('up'),(req,res)=>{
    res.send("image uploaded sucessfully")
})
app.get('/',(req,res)=>{
     res.render('index');
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})

const express = require('express');
const mongoose = require('mongoose');
const item = mongoose.model('Items');
const { ensureIndexes } = require('../models/NewUser.model');
const path = require('path');
const multer = require('multer')
const sessions = require('express-session');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploadimages')
    },
    filename:(req,file,cb)=>{
        image_name=Date.now()+path.extname(file.originalname)
        cb(null,image_name)
    },
})
const upload = multer({storage:storage})

const router = express.Router();
router.use(express.static("public"));

router.use(sessions({
    secret: "Secret Key",
    saveUninitialized:true,
    cookie: { maxAge:3600 },
    resave: false
}));


router.get('/',(req,res)=>{
    res.render('item')
})



router.post('/',upload.single('image'),(req,res)=>{
   const items = new item()
   items.icode=req.body.icode   
   items.iname=req.body.iname   
   items.vid=req.session.sid;
   items.category=req.body.category    
   items.price=req.body.price   
   items.image=image_name

   items.save((err,data)=>{
       if(!err){
            console.log(data);
            
          }   // res.render('welcome',{data:data});
          //   res.render()
       else 
            console.log(err);
   })
   
})

module.exports=router;
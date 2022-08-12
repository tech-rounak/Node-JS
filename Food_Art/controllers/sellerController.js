const express=require('express');

const mongoose=require('mongoose');
const { ensureIndexes } = require('../models/NewSeller.model');
const router=express.Router();
router.use(express.static("public"))
const newSeller=mongoose.model('Sellers');
const nodemailer=require('nodemailer');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({
    extended:true
}))
const oneDay = 3600;
// router.use(cookieParser());

router.use(sessions({
    secret: "Secret Key",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
function send_Mail(mailid,pwd){
        // console.log(mailid);
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'svmcomputer1234@gmail.com',
                pass:'svm@1234'
            }
        });
        const mailOption={
            from:'svmcomputer1234@gmail.com',
            to:mailid,
            subject:'Welcome to Food Art',
            text:'Your Login Id iS:'+mailid+" password ="+pwd

        };

        transporter.sendMail(mailOption,(err,result)=>{
            if(err)
            console.log(err);
            else
            console.log('Mail send successfully!!!');
        })
}

router.post('/',(req,res)=>{
   const seller = new newSeller()
   seller.sname=req.body.sname  
   seller.sid="VE"+Math.floor(Math.random()*10000)
   seller.pwd=req.body.pwd   
   seller.mail_id=req.body.mail_id   
   seller.contact_no=req.body.contact_no  
   seller.save((err,data)=>{
       if(!err){
            console.log("DATA SAVED SUCESSFULLY");
            console.log(data);
            // send_Mail(user.mail_id,user.pwd)
            // res.render('/seller/welcome',{data:data})
          }
       else 
            console.log(err);
   })
   
})
router.post('/dashboard',(req,res)=>{

     var sid=req.body.sid;
     var pwd=req.body.pwd;
     var query = { $and : [{sid: sid}, {pwd : pwd}]}
     newSeller.find(query).then((result)=>{
        //   console.log(result);
          if(result.length===0){
              res.render('seller/login',{msg:'Wrong Id and Password'})
            }
          else{
               const sess=req.session;
               sess.sid=sid;
               console.log(sess.sid);
               res.render('seller/dashboard',{data:result[0]});
            }
     }).catch((err)=>{
          console.log(err);
     })
})

router.get('/signin',(req,res)=>{
     res.render('seller/login',{msg:''});
     // res.render('register');
})
router.get('/register',(req,res)=>{
     res.render('seller/register');
})  
router.get('/logout',(req,res)=>{
    res.render('welcome/homepage_seller');
    req.session.destroy();
    

})
module.exports=router;
const express=require('express');

const mongoose=require('mongoose');
const { ensureIndexes } = require('../models/NewUser.model');
const router= express.Router();
const bcrypt = require('bcrypt');
const newUser = mongoose.model('Users');
const nodemailer = require('nodemailer');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({
    extended:true
}))
router.use(express.static("public"))
const oneDay = 3600;
// router.use(cookieParser());

router.use(sessions({
    secret: "Secret Key",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// router.post('/',(req,res)=>{
//     var uname=req.body.uname;
//     var session=req.session;
//     session.uname=uname;
//     // console.log(session.id);
//     // console.log(uname)
// })

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
   const user = new newUser()
   user.uname = req.body.uname   
   user.pwd = req.body.pwd   
   user.mail_id = req.body.mail_id   
   user.gender = req.body.gender   
   user.contact_no = req.body.contact_no   
   user.dob = req.body.dob   

   user.save((err,data)=>{
       if(!err){

            console.log("DATA SAVED SUCESSFULLY");
            console.log(data);
            // send_Mail(user.mail_id,user.pwd)
            res.render('customer/welcome',{data:data})
          }
       else 
            console.log(err);
   })
   
})
const item = mongoose.model('Items');
router.post('/dashboard',(req,res)=>{

     var uname=req.body.uname;
     var pwd=req.body.pwd;
     var query = { $and : [{mail_id : uname}, {pwd : pwd}]}
     newUser.find(query).then((result)=>{
          // console.log(result);
          if(result.length === 0){
               res.render('customer/login',{msg:'Wrong Id and Password'})
          }
          else{
               item.find((err,data)=>{
                    if(err) throw err;
                    else{
                        const sess = req.session;
                        sess.uid = uname;
                        console.log(sess.uid);
                        res.render('customer/dashboard',{data:result[0],data1:data})
                    }
         
                })
         
          }
     }).catch((err)=>{
          console.log(err);
     })
})
router.get('/signin',(req,res)=>{
     res.render('customer/login',{msg:''});
     // res.render('register');
})
router.get('/register',(req,res)=>{
     
     res.render('customer/register');
})  
router.get('/logout',(req,res)=>{
    console.log(req.session)
    console.log(req.session.uid);
    res.render('welcome/homepage_buyer');
    req.session.destroy();

})
router.get('/generate_captcha',(req,res)=>{
    var otp = Math.floor(1000+Math.random()*9000);
    //  console.log(otp);
     res.send(JSON.stringify(otp));
})  

module.exports=router;
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const telephone = mongoose.model('telephone');

router.get('/',(req,res)=>{
    res.render("NewDetails",{msg:""});
})
router.post('/',(req,res)=>{
        const tele = new telephone()
        tele.contact = req.body.contact
        tele.adress = req.body.adress
        tele.ename = req.body.ename
        tele.save((err,data)=>{
            if(!err)
                res.render("NewDetails",{msg:"Data Saved Succesfully"})
        })
})
router.get("/show",(req,res)=>{
    telephone.find((err,data)=>{
        if(!err)
            res.render('show',{data:data});
    })
})
router.get("/delete/:id",(req,res)=>{
    telephone.findOneAndDelete(req.params.id,(err,data)=>{
        if(!err)
            res.redirect("/telephone/show");
    })
})
router.get("/edit/:id",(req,res)=>{
    telephone.findById(req.params.id,(err,data)=>{
            if(!err)
                res.render("EditDetails",{data:data});
    })
})
router.post("/update",(req,res)=>{
    const _id=req.params._id;
     // console.log(req.params.id);
      telephone.findByIdAndUpdate({_id:req.body._id},req.body,{new:true},(err,data)=>{
               if(!err)
               res.redirect("/telephone/show");
          })
    
})
module.exports=router;
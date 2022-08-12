const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const{v4:uuidv4}=require('uuid');
router.use(express.static("public"))
const sessions=require('express-session')
const newCart=mongoose.model('Cart');
const newItem=mongoose.model('Items');
const newOrder=mongoose.model('Orders');
router.use(express.static("public"));
const { ensureIndexes } = require('../models/temp_cart');
const bodyparser = require('body-parser');
const temp_cart = require('../models/temp_cart');

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
router.use(bodyparser.json());
router.post('/',(req,res)=>{
    const cart =new newCart();
    var ic=req.body.itemcode;
      console.log("Uid from :"+req.session.uid);
    newItem.findOne({icode:ic},(err,data)=>
    {
        if(!err){
           
            query={$and : [{icode:ic},{uid:req.session.uid}]}
            newCart.findOne(query,(err1,data1)=>{
                if(err1){
                  
                    throw err1;     
                }
                // if the item is not present in the cart;
                else if(!data1)
                {
                    // console.log("Data Not Present");
                   
                    cart.icode=ic,
                    cart.iname=data.iname,
                    cart.category=data.category,
                    cart.price=data.price,
                    cart.status=0,
                    cart.image=data.image,
                    cart.vid=data.vid,
                    cart.uid=req.session.uid,
                    // console.log(uid);
                    cart.quantity=req.body.count
                    cart.save((err2,data2)=>{
                        if(err2) throw err2;

                        })
                }
                else{
                    qt=parseInt(data1.quantity)+parseInt(req.body.count);
                      query={$and : [{icode:ic},{uid:req.session.uid}]}
                    newCart.updateOne({query},(err3,res3)=>{
                        if(err3)
                            throw err3;

                    })
                
                
                }
            
            })
        }
        else throw err;
    });

});
router.get('/cartpage',(req,res)=>{
    query={uid:req.session.uid}
   
    newCart.find(query,(err,data)=>{
        res.render("customer/cart.ejs",{data:data})
    })
})
router.get('/delete/:id',(req,res)=>{
    
    query={$and: [{icode:req.params.id},{uid:req.session.uid}]}
    newCart.deleteOne({query},(err,data)=>{
        res.redirect('/cart/cartpage')
    })
})





module.exports=router;
const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const{v4:uuidv4}=require('uuid');
router.use(express.static("public"))
const sessions=require('express-session')
router.use(express.static("public"));
const bodyparser = require('body-parser');
const newCart=mongoose.model('Cart');
const newOrder=mongoose.model('Orders');
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

router.get('/',(req,res)=>{
        vid=req.session.vid
        vid=JSON.stringify(vid)
        console.log(vid)
        var query={vid:vid}
        // let vid=req.session.sid;
        // console.log(req.session.sid)
        newOrder.find(query,(err,result)=>{
            console.log(result);
            //res.render('seller/order',{data:result})
         })
});
function ordersave(oid,uid,data)
{
    const order=new newOrder()
    order.orderid=oid,
    order.uid=uid,
    order.icode=data.icode,
    order.iname=data.iname,
    order.category=data.category,
    order.price=data.price,
    order.status=0,
    order.image=data.image,
    order.vid=data.vid,
    order.quantity=data.quantity
    order.save((err,data)=>{
        // console.log("SAVED SUCESSFULLY")
    })
}
router.get('/checkout',(req,res)=>{
    var oid=Date.now();
    var uid=req.session.uid;
  
    qu={uid:uid}
    let obj={}
    newCart.find(qu).then((result)=>{
        result.forEach((data)=>{

            ordersave(oid,uid,data)
        })  
        })

    
    // console.log(obj);
    // var d=JSON.parse(data[0]);
    // console.log(data[0]);
})

module.exports=router;
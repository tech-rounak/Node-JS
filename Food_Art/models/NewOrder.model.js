const mongoose=require('mongoose');

const newOrderSchema =  new mongoose.Schema({
    orderid:String,
    uid:String,
    icode:Number,
    iname:String,
    status:Number,
    price:Number,
    image:String,
    vid:String,
    quantity:Number
    // item:JSON
});
module.exports=mongoose.model('Orders',newOrderSchema);
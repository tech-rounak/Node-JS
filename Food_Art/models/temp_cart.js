const mongoose=require('mongoose');

// const Schema= mongoose.Schema;
// const{string}=require('prop-types');
const newCartSchema =  new mongoose.Schema({
    icode:Number,
    iname:String,
    status:Number,
    category:String,
    price:Number,
    image:String,
    vid:String,
    uid:String,
    quantity:Number

});
module.exports=mongoose.model('Cart',newCartSchema);
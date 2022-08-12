const mongoose=require('mongoose');

const itemSchema =  new mongoose.Schema({
    icode:Number,
    vid:String,
    iname:String,
    category:String,
    price:Number,
    image:String
});
module.exports=mongoose.model('Items',itemSchema);
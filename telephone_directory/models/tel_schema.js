const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const teleSchema=new mongoose.Schema({
    contact:Number,
    ename:String,
    adress:String
})
var user = mongoose.model('telephone',teleSchema);
module.exports={user};
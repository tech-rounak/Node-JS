const mongoose = require('mongoose');

const newSellerSchema =  new mongoose.Schema({
    sname:String,
    sid:String,
    pwd:String,
    mail_id:String,
    contact_no:Number
});
module.exports = mongoose.model('Sellers',newSellerSchema);
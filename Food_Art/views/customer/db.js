const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
    email:String,
    pwd:String
})
module.exports = mongoose.model('users',UserSchema)
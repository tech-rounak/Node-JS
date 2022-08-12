const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TelephoneDirectory',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected Succefully");
}).catch((err)=>{
    console.log("data base connection failed");
    console.log(err);
})
require('./tel_schema');
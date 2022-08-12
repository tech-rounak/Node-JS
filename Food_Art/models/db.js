const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/FoodArt',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected Succefully");
}).catch((err)=>{
    console.log("Database Connection Failed");
    console.log(err);
})
require('./NewUser.model');
require('./item.model');
require('./temp_cart');
require('./NewOrder.model')
require('./NewSeller.model')
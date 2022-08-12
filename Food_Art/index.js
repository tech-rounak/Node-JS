require('./models/db');
const express = require('express')
const sessions=require('express-session')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(sessions({
    secret: "Secret Key",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.set('view engine','ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
     res.render('welcome/homepage')
})
app.get('/seller',(req,res)=>{
     res.render('welcome/homepage_seller')
})
app.get('/buyer',(req,res)=>{
     res.render('welcome/homepage_buyer')
})

 
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const cartController = require('./controllers/cartController');
const sellerController = require('./controllers/sellerController');
const orderController= require('./controllers/orderController');

app.use('/user',userController);
app.use('/items',itemController);
app.use('/cart',cartController);
app.use('/seller',sellerController);
app.use('/order',orderController);

app.listen(5000,()=>{
     console.log("Server is running at PORT 3000")
})
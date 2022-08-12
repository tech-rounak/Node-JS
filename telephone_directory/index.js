
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/db');
app.use(bodyParser.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
     res.render('home');
})
app.set('view engine','ejs');
const teleController = require('./Controllers/teleController')
app.use('/telephone',teleController);
app.listen(3000,()=>{
    console.log("server is running at port 3000");
})

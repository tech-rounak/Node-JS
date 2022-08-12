const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/FoodArt",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('connected with database');
}).catch((err)=>{
    console.log(err);
})

const searchSchema = new mongoose.Schema({
    iname:String
})

const search = mongoose.model('items',searchSchema);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('search');
})

app.post('/',(req,res)=>{
    let q = req.body.key;
    // console.log(q);
    data="";
    if(q.length>0){
        search.find((err,results)=>{
            if(err)
            console.log(err);
            else{
                console.log(results);
                results.forEach((result)=>{
                    m = result.iname.toLowerCase();
                    console.log(m);
                    if(m.indexOf(q)!=-1)
                        data=data+result.iname+"<br>";
                    // console.log(data)
                })
                // console.log(data);
                res.send(data);
            }
        })
    }
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})
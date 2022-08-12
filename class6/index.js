const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect("mongodb://localhost:27017/BookDetails",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Problem in Connection");
})
const bookSchema = new mongoose.Schema({
    bid:Number,
    bname:String,
    pages:Number,
    price:Number
})

const book = new mongoose.model('book',bookSchema);
// to save the data
const saveDocument = async()=>{
    try{
        const b1 = new book({
        bid:104,
        bname:"PHP",
        pages:434,
        price:310
    })
    const result=await b1.save();
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
// to get the records 
const getRecords=async()=>{
    const result=await book.find().select({_id:0,bid:1,bname:1,price:1,pages:1});
    console.log(result);
}
// getRecords();
// saveDocument();
// const b1=new book({
//     bid:101,
//     bname:"C++",
    // pages:4340,
//     price:3020
// })
// b1.save().then(()=>{
//     console.log("Data Saved Sucessfully");
// }).catch((err)=>{
//     console.log("Data Not Saved")
// })
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    book.find((err,result)=>{
        if(!err)
        res.render('show',{data:result});
    })
})
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})


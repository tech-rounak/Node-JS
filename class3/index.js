const express = require("express");
const mysql=require('mysql')
const app = express();
// app.get("/about/:name", (req, res) => {
//   res.send("<h1>Welcome Mr." + req.params.name + "</h1>");
// });
app.set("view engine", "ejs");

var con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"db_emp"
})
con.connect((err)=>{
    if(err)
        throw(err)
    con.query("SELECT * from tbl_emp",(err,data,fields)=>{
        if(err)
            throw(err)
        console.log(data);
    })
})
// app.get("/", (req, res) => {
//   res.render("index", {
//     name: "Rounak",
//     roll: 12,
//     courses: ["PHP", "C++", "SQL","Node","Javascript"],
//   });
// });
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

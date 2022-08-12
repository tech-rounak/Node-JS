const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/submit", (req, res) => {
  var name = req.body.uname;
  var email = req.body.email;
  res.send("<h1>Name:" + name + "<br>Email:" + email + "</h1>");
});
app.post("/submit1", (req, res) => {
  var a = parseInt(req.body.first);
  var b = parseInt(req.body.second);
  res.send("<h1>" + a + " + " + b + " = " + (a + b) + "</h1>");
});
app.get("/sum", (req, res) => {
  //   res.send("<h1>Contact Page</h1>");
  res.sendFile(__dirname + "/sum.html"); // to  send a file
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact Page</h1>");
  res.sendFile(__dirname + "/contact.html"); // to  send a file
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

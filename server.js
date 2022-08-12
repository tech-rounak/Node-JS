const http = require("http");
const server = http.createServer(3000,(req, res) => {
  res.end("<h1>Welcome to node</h1>");
});
// server.listen(3000, () => {
//   console.log("server is running is at port at 3000");
// });

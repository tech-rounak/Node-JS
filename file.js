const fs = require("fs");
// create a file
// fs.appendFile("nites.txt", "hello world", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("files created");
// });

// To Read A file
// fs.readFile("nites.txt", (err, data) => {
//   if (err) console.log("File Not Found");
//   else console.log(data.toString());
// });

// to rename a file
// fs.rename("nites.txt", "notes.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("files renamed");
// });

// To delete A FILE
fs.unlink("notes.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("files Deleted");
});

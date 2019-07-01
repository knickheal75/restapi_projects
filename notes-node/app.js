console.log("starting app.js");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

console.log(`Result:${notes.add(5, 8)}`);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFile(
//   "greetings.txt",
//   `hello ${user.username}! and you are ${notes.age}`,
//   function(err) {
//     if (err) {
//       console.log("Unable to write to file");
//     }
//   }
// );

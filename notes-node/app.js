console.log("starting app.js");
const fs = require("fs");
const yargs = require("yargs");
// const os = require("os");
const notes = require("./notes.js");

// console.log(`Result:${notes.add(5, 8)}`);

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
const argv = yargs.argv;
var command = argv._[0];
console.log("command:", command);
console.log("process:", process.argv);
console.log("yargs:", argv);

if (command == "add") {
  notes.addNote(argv.title, argv.body);
} else if (command == "list") {
  notes.getAll();
} else if (command == "read") {
  notes.getNote(argv.title);
} else if (command == "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("command not recognised");
}

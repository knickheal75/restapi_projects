// console.log("starting app.js");
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

var titleOptions = {
  describe: "Title of node",
  demand: true,
  alias: "T"
};

var bodyOptions = {
  describe: "Body of node",
  demand: true,
  alias: "B"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "list all notes")
  .command("read", "read a note", {
    title: titleOptions
  })
  .command("remove", "remove a note", {
    title: titleOptions
  })
  .help().argv;
var command = argv._[0];

// console.log("command:", command);
// console.log("process:", process.argv);
console.log("yargs:", argv);

if (command == "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("command not recognised");
}

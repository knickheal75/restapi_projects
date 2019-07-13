const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// var id = "5d295c5cc1d253492ef4359a";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

User.findById("5d2919e0bc3434181d3d867b")
  .then(user => {
    if (!user) {
      return console.log("user not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(err => console.log(err));

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos:", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo:", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("ID not found");
//     }
//     console.log("Todo: by ID", todo);
//   })
//   .catch(err => console.log(err));

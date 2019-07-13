const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove({ _id: "5d29fd2aca3e13857e7594a0" }).then(todo => {});

Todo.findByIdAndRemove("5d29fd2aca3e13857e7594a0").then(todo => {
  console.log(todo);
});

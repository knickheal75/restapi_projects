// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();

// console.log(obj);

// var user = { name: "nikhil", age: 28 };
// var { name } = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to DB");
  }
  console.log("Connected to DB");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "something to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("unable to insert todo", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  //   db.collection("Users").insertOne(
  //     {
  //       name: "nikhil",
  //       age: 28,
  //       location: "pune"
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("unable to insert todo", err);
  //       }
  //       console.log(result.ops[0]._id.getTimestamp());
  //     }
  //   );

  db.collection("Todos")
    .find()
    .toArray()
    .then(
      docs => {
        console.log("Todos:");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch todos", err);
      }
    );

  //   db.close();
});

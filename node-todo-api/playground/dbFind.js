const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to DB");
  }
  console.log("Connected to DB");

  //   db.collection("Todos")
  //     .find({
  //       _id: new ObjectID("5d28cd8aa7f85e64954f3484")
  //     })
  //     .toArray()
  //     .then(
  //       docs => {
  //         console.log("Todos:");
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       err => {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     );

  //   db.collection("Todos")
  //     .find()
  //     .count()
  //     .then(
  //       count => {
  //         console.log("Todos count:", count);
  //         // console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       err => {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     );

  db.collection("Users")
    .find({ name: "nikhil" })
    .toArray()
    .then(
      docs => {
        console.log("users filtered:");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("unable to fetch", err);
      }
    );

  //   db.close();
});

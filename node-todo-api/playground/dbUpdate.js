const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to DB");
  }
  console.log("Connected to DB");

  db.collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5d290466b093f4aaba119499")
      },
      {
        $set: { completed: true }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  db.collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5d290a7ab093f4aaba11980d") },
      {
        $set: { name: "kin" },
        $inc: { age: 2 }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
});

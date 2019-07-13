const { ObjectID } = require("mongodb");

const express = require("express");
const bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Server running on port ${port}`);
});

module.exports = { app };

// var newUser = new User({ email: "" });

// newUser.save().then(
//   doc => {
//     console.log("saved email for user", doc);
//   },
//   err => {
//     console.log("unable to save user email");
//   }
// );

// var newTodo = new Todo({
//   text: "cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("saved todo", doc);
//   },
//   err => {
//     console.log("unable to save todo");
//   }
// );

// var otherTodo = new Todo({
//   text: "   edit this video  "
// });

// otherTodo.save().then(
//   doc => {
//     console.log("saved todo", doc);
//   },
//   err => {
//     console.log("unable to save todo");
//   }
// );

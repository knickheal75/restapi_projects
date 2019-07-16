// var env = process.env.NODE_ENV || "development";

// console.log("env *****", env);

// if (env === "development") {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI =
//     "mongodb://nick:nick123@ds249233.mlab.com:49233/todolistapp";
// } else if (env === "test") {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
// }

const { ObjectID } = require("mongodb");
const _ = require("lodash");

const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

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

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.post("/users", (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);

  var user = new User(body);

  user
    .save()
    .then(() => {
      //   res.send(user);
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
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

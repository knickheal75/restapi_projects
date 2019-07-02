const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, function(err) {
  if (err) {
    throw err;
  }
  console.log(`Server running at port ${port} `);
});

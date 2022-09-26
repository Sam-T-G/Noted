// App Dependencies
const express = require("express");
const path = require("path");

// Express app/server set up
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up app to listen to requests
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// App Dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes");

// Express app/server set up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

// GET function that sends user to AJAX page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Sets up app to listen to requests
app.listen(PORT, () => console.log("Now listening"));

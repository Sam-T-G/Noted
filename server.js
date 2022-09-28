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

// Sets up app to listen to requestsa
app.listen(PORT, () => console.log("Now listening"));

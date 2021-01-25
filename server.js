const express = require("express");
const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 9000;

// Initialise the app
let app = express();

// Configure to use statics
app.use(express.static(path.join(__dirname, "public")));

// Run the server
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});

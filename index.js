const express = require("express");
const { type } = require("os");
const app = express();
const path = require("path");
const { albums } = require("./data");
require("./db");
require("./expressbasics");
const routes = require("./routes/index");

//body parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.use("/api", routes);

// (req) => (middlewares) => res;

app.all("*", (req, res) => {
  res.send("Resource not found");
});

app.listen("4000", () => {
  console.log("Server running at port 4000");
});

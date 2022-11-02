const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/expressmongo")
  .then(() => console.log("Mongo DB COnnected"))
  .catch((err) => console.log("Mongo connection error:", err));

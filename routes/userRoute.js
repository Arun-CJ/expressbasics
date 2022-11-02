const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/userModel");
const { addUser } = require("../controllers/userController");

userRouter.post("/addUser", addUser);

userRouter.put("/editUser/:email", async(req));

module.exports = userRouter;

const userRouter = require("./userRoute");
const express = require("express");
const router = express();

//Routes
router.use("/user", userRouter);

module.exports = router;

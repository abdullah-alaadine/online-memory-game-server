require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const { restrictAccess } = require("./middlewares/restrictAccess");

const app = express();
app.use(restrictAccess);
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("the server is up and listening on Port:", process.env.PORT);
  });
});

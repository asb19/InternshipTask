const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/amir");

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

db.once("open", function () {
  console.log("connected to mongodb");
});

//routes
const groceryRouter = require("./routes/grocery");
app.use("/groceries", groceryRouter);

const port = 5000;
app.listen(port, function () {
  console.log(`server running at port ${port}`);
});

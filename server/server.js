const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//cors = cross origin requests

require("dotenv").config();

//routes
const movieRoutes = require("./routes/movies");
const userRoutes = require("./routes/users");

//start the server
const app = express();

//global middleware to access request - translate
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//setting up routes to habits and users
app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

// connect to DB && async
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listens for requests once we are connected to the database
    app.listen(process.env.PORT, () => {
      console.log("connected to db && listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

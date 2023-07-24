const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3030;
const connectDB = require("./config/db");
const dataRoute = require("./Routes/userRoutes");

// cors access
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb connection
connectDB();


app.get('/ping', (req, res) => {
    res.send('pong 🏓');
  });
  

//middleware
const morgan = require("morgan");
const { response } = require("express");
app.use(morgan("dev"));

//routes
app.use("/user", dataRoute);

const server = app.listen(port, console.log(`Server is running in on ${port}`));

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
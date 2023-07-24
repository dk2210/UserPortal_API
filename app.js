const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3030;
const connectDB = require("./config/db");
const dataRoute = require("./Routes/userRoutes");
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use(express.json());
//mongodb connection
connectDB();

//middleware
const morgan = require("morgan");
const { response } = require("express");
app.use(morgan("dev"));

//routes
app.use("/user", dataRoute);

// cors acess
// app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, console.log(`Server is running in on ${PORT}`));

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
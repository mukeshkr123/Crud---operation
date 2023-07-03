require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//init connection to db
connectDB();

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

module.exports = app;

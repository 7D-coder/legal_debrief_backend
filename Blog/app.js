require("express-async-errors");
const express = require("express");
//import express from "express";

require("dotenv").config();
require("./db");

const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

const postRouter = require("./routers/post");
app.use("/api/post", postRouter);

//To handle error
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("port is listening on " + PORT);
});

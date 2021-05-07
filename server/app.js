const express = require("express");
const app = express();
const conceptsRouter = require("./routes/conceptsRoutes.js");

app.use("/api/v1/concepts", conceptsRouter);

module.exports = app;

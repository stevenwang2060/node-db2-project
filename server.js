const express = require("express");
const carsRouter = require("./api/carsRouter");
const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).json(req.query);
});

server.use("/api", carsRouter);

module.exports = server;
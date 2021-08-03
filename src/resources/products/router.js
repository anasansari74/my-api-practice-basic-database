const express = require("express");

const productsRouter = express.Router();

const { findAll, findOne, createOne } = require("./controller");

productsRouter.get("/", findAll);

productsRouter.get("/:id", findOne);

productsRouter.post("/", createOne);

module.exports = productsRouter;

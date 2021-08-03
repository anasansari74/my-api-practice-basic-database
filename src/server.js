const express = require("express");
const morgan = require("morgan");

const app = express();

const dbClient = require("./utilities/database");

const productsRouter = require("./resources/products/router");

// Middlewares

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/products", productsRouter);

app.get("*", (req, res) => {
  res.json({ msg: "ok" });
});

// Run server

app.listen(4000, () => {
  dbClient.connect(error => {
    if (error) {
      console.error(error.stack);
    } else {
      console.log("Database is connected");
    }
  });
  console.log("app running!");
});

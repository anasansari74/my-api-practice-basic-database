const Product = require("./model");

const { createOneProduct, findOneProduct } = Product();

function findAll(req, res) {
  res.json({ products: "More than you can buy!" });
}

function findOne(req, res) {
  const { id } = req.params;

  findOneProduct(Number(id), product => {
    res.json({ product });
  });
}

function createOne(req, res) {
  const newProduct = req.body;

  createOneProduct(newProduct, createdProduct => {
    res.json({ product: createdProduct });
  });
}

module.exports = {
  findAll,
  findOne,
  createOne,
};

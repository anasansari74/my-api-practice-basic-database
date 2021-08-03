const dbClient = require("../../utilities/database");

/* 
    Product has:
        id primary key
        name string
        price number float
*/

function Product() {
  function createTable() {
    const sql = `
            CREATE TABLE IF NOT EXISTS porducts(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                price FLOAT(2),

                UNIQUE(name)
            )
        `;

    dbClient.query(sql).then(result => {
      console.log("created products table");
    });
  }

  function findOneProduct(productId, callback) {
    const sql = `
      SELECT * FROM products
      WHERE id = ($1);
    `;

    dbClient.query(sql, [productId]).then(result => {
      callback(result.rows[0]);
    });
  }

  function createOneProduct(newProduct, callback) {
    const { name, price } = newProduct;

    const sql = `
      INSERT INTO products (name, price)
      VALUES ($1, $2)
      RETURNING *;
    `;

    dbClient.query(sql, [name, price]).then(result => {
      callback(result.rows[0]);
    });
  }

  createTable();

  return {
    createOneProduct,
    findOneProduct,
  };
}

module.exports = Product;

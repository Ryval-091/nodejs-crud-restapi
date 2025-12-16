import db from "../config/db.js";

// CREATE
export const createProduct = (req, res) => {
  const { category_id, name, price } = req.body;

  db.query(
    "INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)",
    [category_id, name, price],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        id: result.insertId,
        category_id,
        name,
        price,
      });
    }
  );
};

// READ ALL
export const getProducts = (req, res) => {
  db.query(
    `SELECT p.*, c.name AS category_name
     FROM products p
     JOIN categories c ON p.category_id = c.id`,
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};

// READ BY ID
export const getProductById = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    }
  );
};

// UPDATE
export const updateProduct = (req, res) => {
  const { name, price } = req.body;

  db.query(
    "UPDATE products SET name = ?, price = ? WHERE id = ?",
    [name, price, req.params.id],
    () => {
      res.json({ message: "Product updated" });
    }
  );
};

// DELETE
export const deleteProduct = (req, res) => {
  db.query(
    "DELETE FROM products WHERE id = ?",
    [req.params.id],
    () => {
      res.json({ message: "Product deleted" });
    }
  );
};

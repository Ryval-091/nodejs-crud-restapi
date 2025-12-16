import db from "../config/db.js";

// CREATE
export const createCategory = (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        id: result.insertId,
        name,
      });
    }
  );
};

// READ ALL
export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// READ BY ID
export const getCategoryById = (req, res) => {
  db.query(
    "SELECT * FROM categories WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    }
  );
};

// UPDATE
export const updateCategory = (req, res) => {
  const { name } = req.body;

  db.query(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, req.params.id],
    () => {
      res.json({ message: "Category updated" });
    }
  );
};

// DELETE
export const deleteCategory = (req, res) => {
  db.query(
    "DELETE FROM categories WHERE id = ?",
    [req.params.id],
    () => {
      res.json({ message: "Category deleted" });
    }
  );
};


# Node.js CRUD REST API

REST API sederhana menggunakan Node.js, Express.js, dan MySQL
untuk CRUD **Categories** dan **Products**.

server berjalan di: http://localhost:3000

---

## Cara Menjalankan Project

```sql
-- 1. Membuat database dan tabel
CREATE DATABASE tugas_crud_api;
USE tugas_crud_api;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id)
    REFERENCES categories(id)
    ON DELETE CASCADE
);

# 2. Install dependency
npm install

# 3. Jalankan server
npm run dev

# 4. Konfigurasi environment
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=tugas_crud_api


Pengujian API (Postman)

Pengujian REST API dilakukan menggunakan Postman dengan endpoint berikut:

Categories

POST /categories

GET /categories

GET /categories/:id

PUT /categories/:id

DELETE /categories/:id

Products

POST /products

GET /products

GET /products/:id

PUT /products/:id

DELETE /products/:id

Screenshot hasil pengujian API terdapat pada folder screenshots/.

screenshot ada di file screenshots
berisi POST,GET,PUT,DELETE


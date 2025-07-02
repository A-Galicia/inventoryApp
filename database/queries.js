const pool = require('./pool');

async function getAllCatagories() {
  const { rows } = await pool.query('SELECT * FROM catagories');
  return rows;
}

async function getAllProducts() {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
}

module.exports = {
  getAllCatagories,
  getAllProducts,
};

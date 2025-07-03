const pool = require('./pool');

async function getAllCatagories() {
  const { rows } = await pool.query('SELECT * FROM catagories');
  return rows;
}

async function getAllProducts() {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
}

/* const item = {
  id: 1,
  name: 'hotdog',
  price: 21,
  description: 'the beef hotdog',
}; */

async function getQueryItem(id) {
  console.log('top');
  console.log(id);
  console.log('bottom');
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

  return result.rows[0];
}

module.exports = {
  getAllCatagories,
  getAllProducts,
  getQueryItem,
};

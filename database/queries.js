const pool = require('./pool');

async function getAllCatagories() {
  const { rows } = await pool.query('SELECT * FROM catagories');
  return rows;
}

async function getAllProducts() {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
}

async function getQueryItem(id) {
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

  return result.rows[0];
}

async function getQueryCatagories(id) {
  const { rows } = await pool.query(
    'SELECT DISTINCT products.name, products.id FROM catagories INNER JOIN products ON catagory_id = $1',
    [id]
  );
  console.log(rows);
  return rows;
}

async function getItemSearch(name) {
  const { rows } = await pool.query(
    'SELECT name, id, price FROM products WHERE name ILIKE $1',
    [`%${name}%`]
  );
  console.log(rows);
  return rows;
}

async function postCatagory(name) {
  await pool.query('INSERT INTO catagories (name) VALUES ($1)', [name]);
}

module.exports = {
  getAllCatagories,
  getAllProducts,
  getQueryItem,
  getQueryCatagories,
  getItemSearch,
  postCatagory,
};

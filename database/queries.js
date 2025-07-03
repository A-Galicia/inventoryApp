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
    'SELECT * FROM catagories INNER JOIN products ON catagory_id = $1',
    [id]
  );
  console.log(rows);
  return rows;
}

module.exports = {
  getAllCatagories,
  getAllProducts,
  getQueryItem,
  getQueryCatagories,
};

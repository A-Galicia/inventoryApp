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
  return rows;
}

async function getItemSearch(name) {
  const { rows } = await pool.query(
    'SELECT name, id, price FROM products WHERE name ILIKE $1',
    [`%${name}%`]
  );

  return rows;
}

async function postCatagory(name) {
  await pool.query('INSERT INTO catagories (name) VALUES ($1)', [name]);
}

async function modifyCatagoryPost(name, id) {
  await pool.query('UPDATE catagories SET name = $1 WHERE id = $2', [name, id]);
}

async function deleteCatagory(id) {
  //deletes cartagories and products in that catagory
  await pool.query('DELETE FROM catagories WHERE id = $1', [id]);
  await pool.query('DELETE FROM products WHERE catagory_id = $1', [id]);
}

async function modifyProductPost(ProductId, form) {
  const { name, catagory, price, description } = form;
  await pool.query(
    'UPDATE products SET name = $2,catagory_id = $3, price = $4 ,description = $5 WHERE id = $1',
    [ProductId, name, catagory, price, description]
  );
}

module.exports = {
  getAllCatagories,
  getAllProducts,
  getQueryItem,
  getQueryCatagories,
  getItemSearch,
  postCatagory,
  modifyCatagoryPost,
  deleteCatagory,
  modifyProductPost,
};

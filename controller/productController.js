const db = require('../database/queries');

//

async function getAllCatagories(req, res) {
  const catagories = await db.getAllCatagories();
  res.render('catagories', { catagories: catagories });
}

async function getQueryCatagories(req, res) {
  console.log(req.params.id);
  const products = await db.getQueryCatagories(req.params.id);
  res.render('singleCatagory', { catagory: products });
}

async function getQueryItem(req, res) {
  const item = await db.getQueryItem(req.params.id);
  res.render('item', { item: item });
}

async function getAllProducts(req, res) {
  const products = await db.getAllProducts();
  res.render('products', { title: 'All Products', products: products });
}

async function getItemSearch(req, res) {
  const result = await db.getItemSearch(req.query.name);
  res.render('products', { title: 'Search Results', products: result });
}

module.exports = {
  getAllCatagories,
  getQueryCatagories,
  getQueryItem,
  getAllProducts,
  getItemSearch,
};

const db = require('../database/queries');

//
//
// Catagory functions =============================================

async function getAllCatagories(req, res) {
  const catagories = await db.getAllCatagories();
  res.render('catagories', { catagories: catagories });
}

async function getQueryCatagories(req, res) {
  const products = await db.getQueryCatagories(req.params.id);
  res.render('singleCatagory', { catagory: products });
}

async function createCatagoryGet(req, res) {
  res.render('catagoryForm', { title: 'Create New Catagory' });
}

async function createCatagoryPost(req, res) {
  await db.postCatagory(req.body.name);
  res.redirect('/catagories');
}

async function modifyCatagoryGet(req, res) {
  res.render('catagoryModify', { title: 'Modify Catagory', id: req.params.id });
}

async function modifyCatagoryPost(req, res) {
  await db.modifyCatagoryPost(req.body.name, req.params.id);
  res.redirect('/catagories');
}

async function deleteCatagory(req, res) {
  await db.deleteCatagory(req.params.id);
  res.redirect('/catagories');
}

//_________________________________________________________________

//

// Product Functions ==============================================

async function getItemSearch(req, res) {
  const result = await db.getItemSearch(req.query.name);
  res.render('products', { title: 'Search Results', products: result });
}

async function getQueryItem(req, res) {
  const item = await db.getQueryItem(req.params.id);
  res.render('item', { item: item });
}

async function getAllProducts(req, res) {
  const products = await db.getAllProducts();
  res.render('products', { title: 'All Products', products: products });
}

async function modifyProductGet(req, res) {
  const product = await db.getQueryItem(req.params.id);
  const catagories = await db.getAllCatagories();
  res.render('productModify', {
    title: 'Modify Product',
    product: product,
    catagories: catagories,
  });
}

async function modifyProductPost(req, res) {
  await db.modifyProductPost(req.params.id, req.body);
  res.redirect('/products');
}

//_________________________________________________________________

module.exports = {
  getAllCatagories,
  getQueryCatagories,
  getQueryItem,
  getAllProducts,
  getItemSearch,
  createCatagoryGet,
  createCatagoryPost,
  modifyCatagoryGet,
  modifyCatagoryPost,
  deleteCatagory,
  modifyProductGet,
  modifyProductPost,
};

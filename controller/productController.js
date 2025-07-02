const db = require('../database/queries');

//

/* const stuff = [
  { name: 'burger', price: '$9', id: '1' },
  { name: 'drink', price: '$5', id: '2' },
  { name: 'dessert', price: '$7', id: '3' },
];

const catagories = [
  { name: 'Hot Meals', size: '3', id: '1' },
  { name: 'Drinks', size: '5', id: '2' },
  { name: 'Sides', size: '3', id: '3' },
  { name: 'Desserts', size: '2', id: '4' },
]; */

async function getAllCatagories(req, res) {
  const catagories = await db.getAllCatagories();
  res.render('catagories', { catagories: catagories });
}

function getQueryCatagories(req, res) {
  res.send('Hellow from catagroies query');
}

function getQueryProducts(req, res) {
  res.send('Hellow from products query');
}

async function getAllProducts(req, res) {
  const products = await db.getAllProducts();
  res.render('products', { title: 'All Products', products: products });
}

module.exports = {
  getAllCatagories,
  getQueryCatagories,
  getQueryProducts,
  getAllProducts,
};

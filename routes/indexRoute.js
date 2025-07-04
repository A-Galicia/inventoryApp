const { Router } = require('express');
const productController = require('../controller/productController');
const indexRouter = Router();

//

// POST ///////////////////////////////////////////////////////////

// Catagories

indexRouter.post('/catagories/form', productController.createCatagoryPost);
indexRouter.post(
  '/catagories/modify/:id',
  productController.modifyCatagoryPost
);
indexRouter.post('/catagories/delete/:id', productController.deleteCatagory);

// Products

indexRouter.post('/products/modify/:id', productController.modifyProductPost);

// GET ////////////////////////////////////////////////////////////

// Catagories

indexRouter.get('/catagories/modify/:id', productController.modifyCatagoryGet);
indexRouter.get('/catagories/form', productController.createCatagoryGet);
indexRouter.get('/catagories/:id', productController.getQueryCatagories);
indexRouter.get('/catagories', productController.getAllCatagories);

// Products
indexRouter.get('/products/modify/:id', productController.modifyProductGet);
indexRouter.get('/products/search', productController.getItemSearch);
indexRouter.get('/create/:id', productController.getQueryItem);
indexRouter.get('/products/:id', productController.getQueryItem);
indexRouter.get('/products', productController.getAllProducts);

//

// Index ==========================================================
indexRouter.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = indexRouter;

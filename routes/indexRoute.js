const { Router } = require('express');
const productController = require('../controller/productController');
const indexRouter = Router();

//

// POST ///////////////////////////////////////////////////////////
indexRouter.post('/catagories/form', productController.createCatagoryPost);
indexRouter.post(
  '/catagories/modify/:id',
  productController.modifyCatagoryPost
);
indexRouter.post('/catagories/delete/:id', productController.deleteCatagory);

// GET ////////////////////////////////////////////////////////////
indexRouter.get('/catagories/modify/:id', productController.modifyCatagoryGet);
indexRouter.get('/catagories/form', productController.createCatagoryGet);
indexRouter.get('/catagories/:id', productController.getQueryCatagories);
indexRouter.get('/catagories', productController.getAllCatagories);
indexRouter.get('/products/search', productController.getItemSearch);
indexRouter.get('/products/:id', productController.getQueryItem);
indexRouter.get('/products', productController.getAllProducts);

indexRouter.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = indexRouter;

const { Router } = require('express');
const productController = require('../controller/productController');
const indexRouter = Router();

//

indexRouter.get('/catagories/:id', productController.getQueryCatagories);
indexRouter.get('/catagories', productController.getAllCatagories);
indexRouter.get('/products/:id', productController.getQueryItem);
indexRouter.get('/products', productController.getAllProducts);

indexRouter.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = indexRouter;

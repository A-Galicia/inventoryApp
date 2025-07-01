const { Router } = require('express');
const productController = require('../controller/productController');
const indexRouter = Router();

//

indexRouter.get('/products', productController.getAllProducts);

indexRouter.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = indexRouter;

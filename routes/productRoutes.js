const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

module.exports = router;

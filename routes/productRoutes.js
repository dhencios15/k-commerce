const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/:slug').get(productController.getProduct);

module.exports = router;

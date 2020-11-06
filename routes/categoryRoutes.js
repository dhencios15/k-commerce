const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

module.exports = router;

const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

exports.getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();

  res.status(200).json({
    status: 'success',
    totalResult: allProducts.length,
    data: allProducts,
  });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newProduct,
  });
});

const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

exports.getAllCategories = asyncHandler(async (req, res) => {
  const allCategories = await Category.find();

  res.status(200).json({
    status: 'success',
    data: allCategories,
  });
});

exports.createCategory = asyncHandler(async (req, res) => {
  const newCategory = await Category.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newCategory,
  });
});

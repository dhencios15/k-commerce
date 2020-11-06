const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: ['true', 'A Category must have a name'],
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;

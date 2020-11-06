const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A Category must have a name'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;

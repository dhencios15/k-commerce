const { Schema, model } = require('mongoose');
const slugify = require('slugify');

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'],
    unique: true,
    trim: true,
    maxlength: [
      40,
      'A Product name must have less or equal then 40 characters',
    ],
    minlength: [
      10,
      'A Product name must have more or equal then 10 characters',
    ],
  },
  slug: String,
  brand: {
    type: String,
    required: [true, 'A Product must have a brand'],
  },
  description: {
    type: String,
    required: [true, 'A Product must have a description'],
    trim: true,
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category',
    required: [true, 'A Product must have a category'],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: [true, 'A Product must have a price'],
  },
  imageCover: {
    type: String,
    // required: [true, 'A Product must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

productSchema.index({ slug: 1 });

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: '-__v -_id',
  });
  next();
});

const Product = model('Product', productSchema);

module.exports = Product;

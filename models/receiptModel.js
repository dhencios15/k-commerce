const { Schema, model } = require('mongoose');

const receiptSchema = new Schema({
  soldTo: {
    type: Schema.ObjectId,
    ref: 'User',
    required: [true, 'Receipt must have a customer'],
  },
  products: [
    {
      type: Schema.ObjectId,
      ref: 'Products',
    },
  ],
  totalPrice: {
    type: Number,
    required: [true, 'Receipt must have a Total Price'],
  },
  soldAt: {
    type: Date,
    default: Date.now(),
  },
});

const Receipt = model('Receipt', receiptSchema);

module.exports = Receipt;

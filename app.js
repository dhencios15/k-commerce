const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// app.use('/api/v1', (req, res) => {
//   res.send('HELLO MADAPAKA');
// });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/category', categoryRouter);

module.exports = app;

const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const DB_URI = process.env.DB_PROD;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MONGO DB CONNECTED ...'));

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} ...`));

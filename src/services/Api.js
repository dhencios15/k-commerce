import axios from 'axios';

const DB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL;

export default axios.create({
  baseURL: DB_URI,
});

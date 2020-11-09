import axios from 'axios';

export default axios.create({
  baseURL: 'https://kamahal.herokuapp.com/api/v1',
});

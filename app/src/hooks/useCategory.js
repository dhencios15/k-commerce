import { useQuery } from 'react-query';
import axios from 'axios';

export default function useCategory() {
  return useQuery('category', () =>
    axios
      .get('/category')
      .then((res) => res.data.data)
      .catch((err) => err.res)
  );
}

import { useQuery } from 'react-query';
import Api from 'services/Api';

export default function useCategory() {
  return useQuery('category', () =>
    Api()
      .get('/category')
      .then((res) => res.data.data)
      .catch((err) => err.res)
  );
}

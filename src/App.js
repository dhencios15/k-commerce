import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import 'assets/css/tailwind.output.css';

import Footer from 'components/Footer';
import RouteContainer from 'routes';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className='bg-gray-100 min-h-screen'>
        <div className='container mx-auto space-y-6'>
          <RouteContainer />
          {fetchDevTools}
          <Footer />
        </div>
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;

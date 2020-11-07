import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import App from './App';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactQueryCacheProvider>,
  document.getElementById('root')
);

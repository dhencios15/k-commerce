import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ThemedSuspense from 'components/Shared/ThemeSuspense';

ReactDOM.render(
  <Suspense fallback={<ThemedSuspense />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Windmill } from '@windmill/react-ui';

import 'assets/css/main.css';

import App from './App';

ReactDOM.render(
  <Windmill usePreferences>
    <App />
  </Windmill>,
  document.getElementById('root')
);

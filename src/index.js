import React from 'react';
import { render }      from 'react-dom';

import configureStore from './ConfigureStore';
import Root from './Root';
import './index.css';

const storeWithMiddleware = configureStore();

render(
  <Root store={storeWithMiddleware} />,
  document.getElementById('root')
);

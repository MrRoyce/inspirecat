import React            from 'react';
import { Provider }     from 'react-redux';

import App from './App';

// browserHistory allows clean urls (no #) in the browser url
// use piwik to auto capture each page visited
const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;

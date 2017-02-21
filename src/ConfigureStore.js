//import axios           from 'axios';
import {
  createLogicMiddleware
}                      from 'redux-logic';
//import createLogger    from 'redux-logger';
import {
  createStore,
  applyMiddleware
}                      from 'redux';
import thunkMiddleWare from 'redux-thunk';
import Rx from 'rxjs'; // can import everything or just what you need

import { config }      from './Config';
import logic           from './RootLogic';
import reducers        from './reducers';

const ajax = Rx.Observable.ajax;
const logicDeps = { // injected dependencies for logic
  httpClient : ajax,
  CAT_API : {
    url : config.thecatapi.url,
    key : config.thecatapi.key
  }
};

const configureStore = () => {
  const middlewares = [thunkMiddleWare, createLogicMiddleware(logic, logicDeps)]; // Always have the thunk middleware

  // es6 spread operator to get the values in the array
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  // The createStoreWithMiddleware gets empty object {} as 2nd parameter,
  // can be used to get data from local storage to hydrate store
  const persistedState = {};

  const storeWithMiddleware = createStoreWithMiddleware(reducers, persistedState, (window.devToolsExtension && process.env.NODE_ENV !== 'production') ? window.devToolsExtension() : undefined);

  // add any subscribers to the store here
  // example save the localStorage state - this has e.g. the users location
  // storeWithMiddleware.subscribe(() => {
  //   saveState({
  //     localStorageData: storeWithMiddleware.getState().localStorageData
  //   });
  // });

  return storeWithMiddleware;
};

export default configureStore;

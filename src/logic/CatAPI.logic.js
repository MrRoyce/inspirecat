import { createLogic }  from 'redux-logic';

import * as ActionTypes   from '../Types';

import {
  getCategoriesSuccess,
  getCategoriesFailure,
  getCatSuccess,
  getCatFailure
} from './CatAPI.actions';

export const getCatLogic = createLogic({
  type           : ActionTypes.GET_CAT,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : getCatSuccess,
    failType       : getCatFailure
  },

  // use CAT_API and axios injected as httpClient
  // from configureStore logic deps
  process({ httpClient, CAT_API }) {
    return httpClient({ url : `${CAT_API.url}/cat`, crossDomain: true})
    .map(payload => payload) // use entire response with data and headers
    .catch((err) => {
      console.log('Error on getting cat: ' + err);
    });
  }
});

export const getCategoriesLogic = createLogic({
  type           : ActionTypes.LIST_CATEGORIES,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : getCategoriesSuccess,
    failType       : getCategoriesFailure
  },

  // use CAT_API and axios injected as httpClient
  // from configureStore logic deps
  process({ httpClient, CAT_API }) {
    return httpClient({ url : `${CAT_API.url}/categories`, crossDomain: true})
    .map(payload => payload) // use entire response with data and headers
    .catch((err) => {
      console.log('Error on getting categories: ' + err);
    });
  }
});

export default [
  getCategoriesLogic,
  getCatLogic
];

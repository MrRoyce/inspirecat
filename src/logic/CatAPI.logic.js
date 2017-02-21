import { createLogic }  from 'redux-logic';

import * as ActionTypes   from '../Types';

import {
  getCategoriesSuccess,
  getCategoriesFailure
} from './CatAPI.actions';

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
  getCategoriesLogic
];

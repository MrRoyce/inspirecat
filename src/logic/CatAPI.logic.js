import { createLogic }  from 'redux-logic';

import * as ActionTypes   from '../Types';

import {
  getCategoriesSuccess,
  getCategoriesFailure,
  getCatSuccess,
  getCatFailure,
  voteCatSuccess,
  voteCatFailure,
  getFavoritesSuccess,
  getFavoritesFailure,
  favoriteCatSuccess,
  favoriteCatFailure
} from './CatAPI.actions';

export const getFavoritesLogic = createLogic({
  type           : ActionTypes.GET_FAVORITES,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : getFavoritesSuccess,
    failType       : getFavoritesFailure
  },

  // use CAT_API and axios injected as httpClient
  // from configureStore logic deps
  process({ httpClient, CAT_API }) {
    return httpClient({
      url : `${CAT_API.url}/favorites`,
      crossDomain: true })
    .map(payload => payload) // use entire response with data and headers
    .catch((err) => {
      console.log('Error on getting favorites: ' + err);
    });
  }
});

export const favoriteCatLogic = createLogic({
  type           : ActionTypes.FAVORITE_CAT,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : favoriteCatSuccess,
    failType       : favoriteCatFailure
  },

  // use CAT_API and axios injected as httpClient
  // from configureStore logic deps
  process({ httpClient, CAT_API, action }) {
    return httpClient({
      url : `${CAT_API.url}/setfav?image_id=${action.payload.image_id}`,
      crossDomain: true })
    .map(payload => payload) // use entire response with data and headers
    .catch((err) => {
      console.log('Error on favoriting cat: ' + err);
    });
  }
});

export const voteCatLogic = createLogic({
  type           : ActionTypes.VOTE_CAT,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : voteCatSuccess,
    failType       : voteCatFailure
  },

  // use CAT_API and axios injected as httpClient
  // from configureStore logic deps
  process({ httpClient, CAT_API, action }) {
    return httpClient({
      url : `${CAT_API.url}/vote?image_id=${action.payload.image_id}&score=${action.payload.score}`,
      crossDomain: true })
    .map(payload => payload) // use entire response with data and headers
    .catch((err) => {
      console.log('Error on voting for cat: ' + err);
    });
  }
});

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
  process({ httpClient, CAT_API, action }) {

    const
      // add the category if it was passed in
      category = (action.payload.category) ? `?category=${action.payload.category}` : ''
    ;

    return httpClient({ url : `${CAT_API.url}/cat${category}`, crossDomain: true})
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
  getCatLogic,
  voteCatLogic,
  getFavoritesLogic,
  favoriteCatLogic
];

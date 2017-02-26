import { expect }              from 'chai';
import { createMockStore }     from 'redux-logic-test';
import { Observable }          from 'rxjs';

import * as ActionTypes        from '../Types';
import { getCategoriesLogic  } from './CatAPI.logic';
import reducer                 from '../reducers/CatAPI';
import { config }              from '../Config';

const INITIAL_STATE = {
  categories         : [],
  categories_loading : false,
  favorites          : [],
  favorites_loading  : false,
  cat                : null,
  getting_favorites  : false,
  cat_loading        : false,
  cat_voting         : false,
  cat_favoriting     : false,
  gets               : 0,
  votes              : 0,
  favs               : 0
};

const
  categories = [
    { name : 'test1'}
  ];

const httpClient = () => {
  return Observable.of({ // match shape of reqres.in api
    data: categories,
    map: (payload) =>  payload 
  });
};

const injectedDeps = { // injected dependencies for logic
  httpClient,
  CAT_API : {
    url : config.thecatapi.url,
    key : config.thecatapi.key
  }
};

const store = createMockStore({
  initialState : INITIAL_STATE,
  reducer,
  logic : [getCategoriesLogic],
  injectedDeps
});

it('gets the correct categories', () => {
  store.dispatch({ type: ActionTypes.LIST_CATEGORIES }); // start fetching
  store.whenComplete(() => { // all logic has completed
    expect(store.actions).toEqual([
      { type: ActionTypes.LIST_CATEGORIES },
      { type: ActionTypes.LIST_CATEGORIES_SUCCESS, payload: {} }
    ]);
  });
});

import { combineReducers }       from 'redux';

import CatAPI  from './CatAPI';

const rootReducer = combineReducers({
  catAPIData   : CatAPI
});

export default rootReducer;

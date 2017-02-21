import * as ActionTypes   from '../Types';

const INITIAL_STATE = {
  categories: [],
  categories_loading: false
};

export default function(state = INITIAL_STATE, action) {

  let
    categories
  ;

  switch (action.type) {
    case ActionTypes.LIST_CATEGORIES:
      return { ...state,  categories_loading : true };

    case ActionTypes.LIST_CATEGORIES_SUCCESS:
      // Get the 0th element of each object list!!
      categories = action.payload.data.map((category) => {
        return { id: category.id[0], name: category.name[0]};
      });

      return { ...state, categories_loading : false, categories: categories };

    case ActionTypes.LIST_CATEGORIES_FAIL:
      return { ...state, categories_loading : false, categories: [] };

    default:
      return state;
  }
}

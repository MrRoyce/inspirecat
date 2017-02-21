import * as ActionTypes   from '../Types';

const INITIAL_STATE = {
  categories: [],
  categories_loading: false,
  cat: null,
  cat_loading: false
};

export default function(state = INITIAL_STATE, action) {

  let
    categories, acat
  ;

  switch (action.type) {
    case ActionTypes.LIST_CATEGORIES:
      return { ...state,  categories_loading : true };

    case ActionTypes.LIST_CATEGORIES_SUCCESS:
      // Get the 0th element of each object list!!
      categories = action.payload.data.map((category) => {
        return { id: category.id[0], name: category.name[0] };
      });

      return { ...state, categories_loading : false, categories: categories };

    case ActionTypes.LIST_CATEGORIES_FAIL:
      return { ...state, categories_loading : false, categories: [] };

    case ActionTypes.GET_CAT:
      return { ...state,  cat_loading : true };

    case ActionTypes.GET_CAT_SUCCESS:
      // Get the 0th element of each object list!!
      acat = action.payload.data.map((cat) => {
        return { id: cat.id[0], url: cat.url[0], source_url: cat.source_url[0] };
      });
      return { ...state, cat_loading : false, cat: acat[0] };

    case ActionTypes.GET_CAT_FAIL:
      return { ...state, cat_loading : false, cat: null };

    default:
      return state;
  }
}

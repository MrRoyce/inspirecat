import * as ActionTypes   from '../Types';

export const getCategories = () => {
  return {
    type    : ActionTypes.LIST_CATEGORIES
  };
};

export const getCategoriesSuccess = (res) => {
  return  {type: ActionTypes.LIST_CATEGORIES_SUCCESS,
    payload : {
      data   : res.response,
      status : res.status
    }};
};

export const getCategoriesFailure = (err) => {
  debugger;
  return {
    type: ActionTypes.LIST_CATEGORIES_FAIL,
    payload : {
      message : err
    },
    error: true
  };
};

export const actions = {
  getCategoriesSuccess,
  getCategoriesFailure
};

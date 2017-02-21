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
  return {
    type: ActionTypes.LIST_CATEGORIES_FAIL,
    payload : {
      message : err
    },
    error: true
  };
};

export const getCat = (category) => {
  return {
    type    : ActionTypes.GET_CAT,
    payload : {
      category
    }
  };
};

export const getCatSuccess = (res) => {
  return  {type: ActionTypes.GET_CAT_SUCCESS,
    payload : {
      data   : res.response,
      status : res.status
    }};
};

export const getCatFailure = (err) => {
  return {
    type: ActionTypes.GET_CAT_FAIL,
    payload : {
      message : err
    },
    error: true
  };
};

export const voteCat = ({ image_id, score }) => {
  return {
    type    : ActionTypes.VOTE_CAT,
    payload : {
      image_id,
      score
    }
  };
};

export const voteCatSuccess = (res) => {
  return  {type: ActionTypes.VOTE_CAT_SUCCESS,
    payload : {
      data   : res.response,
      status : res.status
    }};
};

export const voteCatFailure = (err) => {
  return {
    type: ActionTypes.VOTE_CAT_FAIL,
    payload : {
      message : err
    },
    error: true
  };
};

export const getFavorites = () => {
  return {
    type    : ActionTypes.GET_FAVORITES
  };
};

export const getFavoritesSuccess = (res) => {
  return  {type: ActionTypes.GET_FAVORITES_SUCCESS,
    payload : {
      data   : res.response,
      status : res.status
    }};
};

export const getFavoritesFailure = (err) => {
  return {
    type: ActionTypes.GET_FAVORITES_FAIL,
    payload : {
      message : err
    },
    error: true
  };
};

export const actions = {
  getCategoriesSuccess,
  getCategoriesFailure,
  getCatSuccess,
  getCatFailure,
  voteCatSuccess,
  voteCatFailure,
  getFavoritesSuccess,
  getFavoritesFailure
};

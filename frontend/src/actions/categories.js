import * as ReadbleAPI from "./../utils/readbleAPI";

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";

export const CATEGORIES_FETCH_ERROR = "CATEGORIES_FETCH_ERROR";
export function categoriesFetchError(bool) {
  return {
    type: CATEGORIES_FETCH_ERROR,
    hasError: bool
  };
}

export const CATEGORIES_IS_FETCHING = "CATEGORIES_IS_FETCHING";
export function categoriesIsFetching(bool) {
  return {
    type: CATEGORIES_IS_FETCHING,
    isFetching: bool
  };
}

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}

export function categoriesFetch() {
  return dispatch => {
    dispatch(categoriesIsFetching(true));
    return ReadbleAPI.fetchCategories().then(
      response => dispatch(receiveCategories(response)),
      err => dispatch(categoriesFetchError(true))
    );
  };
}
import {
  CATEGORIES_FETCH_ERROR,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  CATEGORIES_IS_FETCHING
} from "../actions/categories";

export function categories(
  state = {
    isFetching: true,
    fetchError: false,
    categories: []
  },
  action
) {
  switch (action.type) {
    case CATEGORIES_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchError: false
      });
    case CATEGORIES_IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        fetchError: false
      });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        fetchError: false,
        categories: action.categories.categories
      });
    default:
      return state;
  }
}
import * as ReadbleAPI from "./../Utils/readbleAPI";

export function itemsHaveError(bool) {
  return {
    type: "ITEMS_HAVE_ERROR",
    hasError: bool
  };
}

export function itemsAreLoading(bool) {
  return {
    type: "ITEMS_ARE_LOADING",
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData() {
  return dispatch => {
    return ReadbleAPI.fetchPosts().then(
      response => dispatch(itemsFetchDataSuccess(response)),
      err => dispatch(itemsHaveError(err))
    );
  };
}

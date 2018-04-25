import * as ReadbleAPI from "./../utils/readbleAPI";

export function postsHaveError(bool) {
  return {
    type: "POSTS_HAVE_ERROR",
    hasError: bool
  };
}

export function postsAreLoading(bool) {
  return {
    type: "POSTS_ARE_LOADING",
    isLoading: bool
  };
}

export function postsFetchSuccess(posts) {
  return {
    type: "POSTS_FETCH_SUCCESS",
    posts
  };
}

export function postsFetch() {
  return dispatch => {
    return ReadbleAPI.fetchPosts().then(
      response => dispatch(postsFetchSuccess(response)),
      err => dispatch(postsHaveError(err))
    );
  };
}

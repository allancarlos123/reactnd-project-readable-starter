import * as ReadbleAPI from "./../utils/readbleAPI";

export const REQUEST_POSTS = "REQUEST_POSTS";

// Action creators
export const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";
export function postsFetchError(bool) {
  return {
    type: POSTS_FETCH_ERROR,
    hasError: bool
  };
}

export const POSTS_IS_FETCHING = "POSTS_IS_FETCHING";
export function postsIsFetching(bool) {
  return {
    type: POSTS_IS_FETCHING,
    isFetching: bool
  };
}

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function postsFetch() {
  return dispatch => {
    dispatch(postsIsFetching(true))
    return ReadbleAPI.fetchPosts().then(
      response => dispatch(receivePosts(response)),
      err => dispatch(postsFetchError(true))
    );
  };
}

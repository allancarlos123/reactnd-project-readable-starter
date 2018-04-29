import {
  POSTS_FETCH_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../actions/posts";

export function posts(
  state = {
    isFetching: false,
    fetchError: false,
    posts: []
  },
  action
) {
  switch (action.type) {
    case POSTS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchError: false
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        fetchError: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchError: false,
        posts: action.posts
      });
    default:
      return state;
  }
}
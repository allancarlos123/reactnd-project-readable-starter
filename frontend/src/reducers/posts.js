import {
  POSTS_FETCH_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  LIKE_POST,
  UNLIKE_POST
} from "../actions/posts";

export function posts(
  state = {
    isFetching: false,
    fetchError: false,
    posts: [],
    id: "",
    option: ""
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
    case LIKE_POST:
      return Object.assign({}, state, {
        id: action.id
      });
    case UNLIKE_POST:
      return Object.assign({}, state, {
        id: action.id
      });
    default:
      return state;
  }
}

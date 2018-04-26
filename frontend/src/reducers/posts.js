import {
  POSTS_FETCH_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../actions";

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

// function postsHaveError(state = false, action) {
//   switch (action.type) {
//     case POSTS_HAVE_ERROR:
//       return action.hasError;
//     default:
//       return state;
//   }
// }

// function postsAreLoading(state = false, action) {
//   switch (action.type) {
//     case POSTS_ARE_LOADING:
//       return action.isLoading;
//     default:
//       return state;
//   }
// }

// function posts(state = [], action) {
//   switch (action.type) {
//     case POSTS_FETCH_SUCCESS:
//       return action.items;
//     default:
//       return state;
//   }
// }
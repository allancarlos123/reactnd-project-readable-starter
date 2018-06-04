import {
  COMMENTS_FETCH_ERROR,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS
} from '../actions/comments';

export function comments(
  state = {
    isFetching: false,
    fetchError: false,
    comments: []
  },
  action
) {
  switch (action.type) {
    case COMMENTS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetch: false
      });
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        fetchError: false
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchError: false,
        comments: action.comments
      });
    default:
      return state;
  }
}
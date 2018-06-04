import _ from 'lodash';
import {
  VOTE_COMMENT_POST,
  DELETE_COMMENT_POST,
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
    case DELETE_COMMENT_POST:
      return _.omit(state, action.payload);
    case VOTE_COMMENT_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
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
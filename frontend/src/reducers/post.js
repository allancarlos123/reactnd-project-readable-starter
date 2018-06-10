import _ from 'lodash';
import {
  DELETE_POST,
  POST_FETCH_ERROR,
  REQUEST_POST,
  RECEIVE_POST
} from "../actions/posts";

export function post(
  state = {
    isFetching: false,
    fetchError: false,
    post: []
  },
  action
) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case POST_FETCH_ERROR:
      return Object.assign({}, state, { fetchError: false });
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        fetchError: false
      });
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        fetchError: false,
        post: action.post
      });
    default:
      return state;
  }
}

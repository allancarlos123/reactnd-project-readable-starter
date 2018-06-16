import {
  IS_EDITING_COMMENT,
  COMMENT_FETCH_ERROR,
  REQUEST_COMMENT,
  RECEIVE_COMMENT,
} from '../actions/comments';

export function comment(
  state = {
    isFetching: true,
    isEditing: false,
    fetchError: false,
    comment: []
  },
  action
) {
  switch (action.type) {
    case IS_EDITING_COMMENT:
      return Object.assign({}, state, { isEditing: action.isEditing });
    case COMMENT_FETCH_ERROR:
      return Object.assign({}, state, { fetchError: false });
    case REQUEST_COMMENT:
      return Object.assign({}, state, {
        isFetching: true,
        fetchError: false
      })
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        fetchError: false,
        comment: action.comment
      });
    default:
      return state;
  }
}
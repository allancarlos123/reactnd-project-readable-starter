import * as ReadbleAPI from "./../utils/readbleAPI";

export const REQUEST_COMMENTS = "REQUEST_COMMENTS";

export const COMMENTS_FETCH_ERROR = "COMMENTS_FETCH_ERROR";
export function commentsFetchError(bool) {
  return {
    type: COMMENTS_FETCH_ERROR,
    hasError: bool
  };
}

export const COMMENTS_IS_FETCHING = "COMMENTS_IS_FETCHING";
export function commentsIsFetching(bool) {
  return {
    type: COMMENTS_IS_FETCHING,
    isFetching: bool
  };
}

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function commentsFetch(id) {
  return dispatch => {
    dispatch(commentsIsFetching(true));
    return ReadbleAPI.fetchComments(id).then(
      response => dispatch(receiveComments(response)),
      err => dispatch(commentsFetchError(true))
    )
  }
}
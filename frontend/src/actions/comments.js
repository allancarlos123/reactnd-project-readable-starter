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


export const COMMENT_DELETE_ERROR = "COMMENT_DELETE_ERROR";
export function commentDeleteError(bool) {
  return {type: COMMENT_DELETE_ERROR, hasError: bool};
}

export const COMMENT_DELETE_SUCCESS = "COMMENT_DELETE_SUCCESS";
export function commentDeleteSuccess(bool) {
  return {type: COMMENT_DELETE_SUCCESS, hasDeleted: bool};
}

export const DELETE_COMMENT_POST = "DELETE_COMMENT_POST";
export function deleteCommentPost(id, callback) {
  return dispatch => {
    return ReadbleAPI.deleteCommentPost(id).then(
      response => {
        // callback();
        dispatch(commentDeleteSuccess(true))
      },
      err => dispatch(commentDeleteError(true))
    )
  }
}

export const COMMENT_VOTE_ERROR = "COMMENT_VOTE_ERROR";
export function commentVoteError(bool) {
  return {type: COMMENT_VOTE_ERROR, hasError: bool};
}

export const COMMENT_VOTE_SUCCESS = "COMMENT_VOTE_SUCCESS";
export function commentVoteSuccess(bool) {
  return {type: COMMENT_VOTE_SUCCESS, hasVoted: bool};
}

export const VOTE_COMMENT_POST = "VOTE_COMMENT_POST";
export function voteCommentPost(id, option) {
  return dispatch => {
    return ReadbleAPI.voteCommentPost(id, option).then(
      response => {
        dispatch(commentVoteSuccess(true))
      },
      err => dispatch(commentVoteError(true))
    )
  }
}
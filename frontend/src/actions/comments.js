import * as ReadbleAPI from "./../utils/readbleAPI";
import generateUUID from './../utils/generateUUID';

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
        callback();
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


export const IS_EDITING_COMMENT = "IS_EDITING_COMMENT";
export function isEditingComment(bool) {
  return {type: IS_EDITING_COMMENT, isEditing: bool};
}

export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR";
export function createCommentError(bool) {
  return {type: CREATE_COMMENT_ERROR, hasError: bool};
}

export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export function createCommentSuccess(bool) {
  return {type: CREATE_COMMENT_SUCCESS, hasCreated: bool};
}

export const CREATE_COMMENT = "CREATE_COMMENT";
export function createComment(postId, values, callback) {
  const {author, body} = values;
  
  const data = {
    id: generateUUID(),
    timestamp: Date.now(),
    parentId: postId,
    author,
    body
  }
  
  return dispatch => {
    return ReadbleAPI
      .createComment(data)
      .then(response => {
        callback()
        dispatch(createCommentSuccess(true))
      }, err => dispatch(createCommentError(true)))
  }
}

export const REQUEST_COMMENT = "REQUEST_COMMENT";

export const COMMENT_FETCH_ERROR = "COMMENT_FETCH_ERROR";
export function commentFetchError(bool) {
  return { type: COMMENT_FETCH_ERROR, hasError: bool };
}

export const COMMENT_IS_FETCHING = "COMMENT_IS_FETCHING";
export function commentIsFetching(bool) {
  return { type: COMMENT_IS_FETCHING, isFetching: bool };
}

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export function receiveComment(comment) {
  return { type: RECEIVE_COMMENT, comment };
}

export function commentFetch(id) {
  return dispatch => {
    dispatch(commentIsFetching(true));
    return ReadbleAPI
      .fetchComment(id)
      .then(response => dispatch(receiveComment(response)), err => dispatch(commentFetchError(true)));
  };
}

export const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";
export function editCommentSuccess(data) {
  return { type: EDIT_COMMENT_SUCCESS, data };
}

export const EDIT_COMMENT = "EDIT_COMMENT";
export function editComment(id, values, callback) {
  const { body, author } = values;

  const data = {
    timestamp : Date.now(),
    author,
    body
  }

  return dispatch => {
    return ReadbleAPI.editComment(id, data).then(response => {
      callback();
      dispatch(editCommentSuccess(response.data))
    });
  }
}
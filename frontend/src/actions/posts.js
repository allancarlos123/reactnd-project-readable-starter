import * as ReadbleAPI from "./../utils/readbleAPI";
import generateUUID from "../utils/generateUUID";

// Posts
export const REQUEST_POSTS = "REQUEST_POSTS";

export const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";
export function postsFetchError(bool) {
  return {type: POSTS_FETCH_ERROR, hasError: bool};
}

export const POSTS_IS_FETCHING = "POSTS_IS_FETCHING";
export function postsIsFetching(bool) {
  return {type: POSTS_IS_FETCHING, isFetching: bool};
}

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export function receivePosts(posts) {
  return {type: RECEIVE_POSTS, posts};
}

export function postsFetch() {
  return dispatch => {
    dispatch(postsIsFetching(true));
    return ReadbleAPI
      .fetchPosts()
      .then(response => dispatch(receivePosts(response)), err => dispatch(postsFetchError(true)));
  };
}

export function postsFetchByCategory(category) {
  return dispatch => {
    dispatch(postsIsFetching(true));
    return ReadbleAPI
      .fetchPostsByCategory(category)
      .then(response => dispatch(receivePosts(response)), err => dispatch(postsFetchError(true)));
  };
}

// Vote in post
export const LIKE_POST = "LIKE_POST";
export function likePost(id) {
  return {type: LIKE_POST, id};
}

export const UNLIKE_POST = "UNLIKE_POST";
export function unlikePost(id) {
  return {type: UNLIKE_POST, id};
}

export function votePost(id, option) {
  return dispatch => {
    return ReadbleAPI
      .votePost(id, option)
      .then(response => {
        if (option === "upVote") {
          dispatch(likePost(id));
        } else {
          dispatch(unlikePost(id));
        }
        dispatch(postsFetch())
      }, err => console.log("deu erro!"));
  };
}

// Post
export const REQUEST_POST = "REQUEST_POST";

export const POST_FETCH_ERROR = "POST_FETCH_ERROR";
export function postFetchError(bool) {
  return {type: POST_FETCH_ERROR, hasError: bool};
}

export const POST_IS_FETCHING = "POST_IS_FETCHING";
export function postIsFetching(bool) {
  return {type: POST_IS_FETCHING, isFetching: bool};
}

export const RECEIVE_POST = "RECEIVE_POST";
export function receivePost(post) {
  return {type: RECEIVE_POST, post};
}

export function postFetch(id) {
  return dispatch => {
    dispatch(postIsFetching(true));
    return ReadbleAPI
      .fetchPost(id)
      .then(response => dispatch(receivePost(response)), err => dispatch(postFetchError(true)));
  };
}

export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export function createPostSuccess(data) {
  return { type: CREATE_POST_SUCCESS, data };
}

export const CREATE_POST = "CREATE_POST";
export function createPost(values, callback) {
  const {title, body, author, category} = values;

  const data = {
    id: generateUUID(),
    title,
    body,
    author,
    category,
    timestamp: Date.now()
  }
  
  return dispatch => {
    return ReadbleAPI.createPost(data).then(response => {
      callback()
      dispatch(createPostSuccess(response.data))
    });
  }
}

export const POST_DELETE_ERROR = "POST_DELETE_ERROR";
export function postDeleteError(bool) {
  return { type: POST_DELETE_ERROR, hasError: bool };
}

export const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS";
export function postDeleteSuccess(bool) {
  return { type: POST_DELETE_SUCCESS, hasDeleted: bool };
}

export const DELETE_POST = "DELETE_POST";
export function deletePost(id, callback) {
  return dispatch => {
    return ReadbleAPI.deletePost(id).then(
      response => {
        callback();
        dispatch(postDeleteSuccess(true))
      },
      err => dispatch(postDeleteError(true))
    )
  }
}

export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export function editPostSuccess(data) {
  return { type: EDIT_POST_SUCCESS, data };
}

export const EDIT_POST = "EDIT_POST";
export function editPost(id, values, callback) {
  const { title, body } = values;

  const data = {
    title,
    body
  }

  return dispatch => {
    return ReadbleAPI.editPost(id, data).then(response => {
      callback();
      dispatch(editPostSuccess(response.data))
    });
  }
}
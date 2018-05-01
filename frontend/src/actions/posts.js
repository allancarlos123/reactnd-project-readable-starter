import * as ReadbleAPI from "./../utils/readbleAPI";

export const REQUEST_POSTS = "REQUEST_POSTS";

// Posts
export const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";
export function postsFetchError(bool) {
  return {
    type: POSTS_FETCH_ERROR,
    hasError: bool
  };
}

export const POSTS_IS_FETCHING = "POSTS_IS_FETCHING";
export function postsIsFetching(bool) {
  return {
    type: POSTS_IS_FETCHING,
    isFetching: bool
  };
}

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function postsFetch() {
  return dispatch => {
    dispatch(postsIsFetching(true));
    return ReadbleAPI.fetchPosts().then(
      response => dispatch(receivePosts(response)),
      err => dispatch(postsFetchError(true))
    );
  };
}

// Vote in post
export const LIKE_POST = "LIKE_POST";
export function likePost(id) {
  return {
    type: LIKE_POST,
    id
  };
}

export const UNLIKE_POST = "UNLIKE_POST";
export function unlikePost(id) {
  return {
    type: UNLIKE_POST,
    id
  };
}

export function votePost(id, option) {
  return dispatch => {
    return ReadbleAPI.votePost(id, option).then(
      response => {
        if (option === "upVote") {
          dispatch(likePost(id));
        } else {
          dispatch(unlikePost(id));
        }
        dispatch(postsFetch())
      },
      err => console.log("deu erro!")
    );
  };
}

import { combineReducers } from "redux";
import { postsAreLoading, postsHaveError, posts } from "./posts";

export default combineReducers({
  postsAreLoading,
  postsHaveError,
  posts
});

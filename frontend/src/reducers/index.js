import { combineReducers } from "redux";
import { post } from "./post";
import { posts } from "./posts";
import { categories } from "./categories";

export default combineReducers({
  post,
  posts,
  categories
});

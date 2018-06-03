import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {post} from "./post";
import {posts} from "./posts";
import {categories} from "./categories";

export default combineReducers({
  post,
  posts,
  categories,
  form: formReducer
});

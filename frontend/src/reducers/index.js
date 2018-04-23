import { combineReducers } from "redux";
import { itemsAreLoading, itemsHaveError, items } from "./posts";

export default combineReducers({
  itemsAreLoading,
  itemsHaveError,
  items
});

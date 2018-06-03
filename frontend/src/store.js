import reducers from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
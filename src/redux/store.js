import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import filterNews from "./reducers/filterNews";
import newsReducer from "./reducers/newsReducer";

const middleWareFunction = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  return next(action);
};

export const store = createStore(
  combineReducers({ newsReducer, filterNews }),
  compose(
    applyMiddleware(thunk, middleWareFunction),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

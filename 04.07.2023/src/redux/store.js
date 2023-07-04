import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { prodcutsReducer } from "./prodcutsReducer";

const rootReducer = combineReducers({
  products: prodcutsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

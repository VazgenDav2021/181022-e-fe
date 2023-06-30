import { createStore, combineReducers } from "redux";
import { nameReducer } from "./reducers/nameReducer";

const rootReducer = combineReducers({
  userName: nameReducer,
});

export const store = createStore(rootReducer);

import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

const rootStore = combineReducers({
  userName: userReducer,
});

export const store = createStore(rootStore);

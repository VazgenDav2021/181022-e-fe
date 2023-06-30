import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer/userReducer";
import { serverusersReducer } from "./reducers/serverUsersReducer/serverUsersReducer";

// делается комбинация всех редюсеров, у нас он пока один
const rootStore = combineReducers({
  users: userReducer,
  serverUsers: serverusersReducer,
});

// на основе скомбинированных редюсеров мы создаем глобальный стор и привниваем его к переменной store
export const store = createStore(rootStore, applyMiddleware(thunk));

import { FETCH_ERROR, USER_SUCCESS } from "../../actions";

const initalState = {
  serverUsers: [],
  isLoading: false,
  errorMessage: "",
};

export const serverusersReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        serverUsers: action.payload,
        isLoading: false,
      };

    case FETCH_ERROR:
      return {
        ...state,
        serverUsers: [],
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

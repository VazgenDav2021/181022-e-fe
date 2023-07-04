import { FETCH_SUCCESS, FETCH_ERROR, FETCH_LOADING } from "./action";

const initalState = {
  isLoading: false,
  erorMessage: "",
  prodcuts: [],
};

export const prodcutsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        prodcuts: action.payload,
      };

    case FETCH_ERROR:
      return {
        ...state,
        erorMessage: action.payload,
      };

    default:
      return state;
  }
};

import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_LOADING = "FETCH_LOADING";

export const fetchUsersSucces = (serverData) => {
  return {
    type: FETCH_SUCCESS,
    payload: serverData,
  };
};

export const fetchUsersError = (message) => {
  return {
    type: FETCH_ERROR,
    payload: message,
  };
};

export const fetchUsersLoading = (status) => {
  return {
    type: FETCH_LOADING,
    payload: status,
  };
};

//
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersLoading(true));
      const data = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          dispatch(fetchUsersLoading(false));
          return res.data;
        });
      dispatch(fetchUsersSucces(data));
    } catch (error) {
      dispatch(fetchUsersError("Что то пошло не так"));
    }
  };
};

export const USER_SUCCESS = "USER_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchUsersSucces = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

export const fetchUsersError = (payload) => {
  return {
    type: FETCH_ERROR,
    payload,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.asdnjasjdnjnasd.com/users"
      );
      const res = await data.json();
      dispatch(fetchUsersSucces(res));
    } catch (error) {
      dispatch(fetchUsersError("Что то пошло не так"));
    }
  };
};

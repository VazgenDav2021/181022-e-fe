const DELETE_USER = "DELETE_USER";

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

const savedUsersInLocaleStorage = JSON.parse(localStorage.getItem("users"));

const initialState = {
  users: savedUsersInLocaleStorage || [
    { name: "Maxiim", id: 1 },
    { name: "Vazgen", id: 2 },
    { name: "Stefan", id: 3 },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      // беру idшник пользователя из payload
      const userId = action.payload;
      // делаю филтрацию и возвращаю всех пользователей, кроме того пользователя у кторорог id равен id который пришел
      const filteredUser = state.users.filter((user) => user.id !== userId);
      // здесь возвращаю state, с изменными ползователями
      localStorage.setItem("users", JSON.stringify(filteredUser));
      return { ...state, users: filteredUser };
    default:
      return state;
  }
};

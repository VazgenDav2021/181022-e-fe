const EDIT_USER_NAME = "EDIT_USER_NAME";

// лучше принимать payload (исходя из дукментации)
export const editUserNameAction = (user_name) => ({
  type: EDIT_USER_NAME,
  user_name,
});

const initalState = {
  userName: "John Doe",
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case EDIT_USER_NAME: {
      return { ...state, userName: action.user_name };
    }
    default: {
      return state;
    }
  }
};

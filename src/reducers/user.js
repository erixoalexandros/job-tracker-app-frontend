import { LOGIN_USER, LOGOUT_USER } from "../action_constants/index";

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

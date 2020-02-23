import { FETCH_JOBS, LOGOUT_USER } from "../action_constants";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_JOBS:
      return [...state, ...payload];
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

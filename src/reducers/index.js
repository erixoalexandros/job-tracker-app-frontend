import { combineReducers } from "redux";
import user from "../reducers/user";
import jobs from "../reducers/jobs";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  user,
  jobs,
  form: formReducer
});

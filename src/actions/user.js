import { LOGIN_USER, LOGOUT_USER } from "../action_constants";
import backendApi from "../apis/backend";
import history from "../history";

export const loginUser = (username, password) => async dispatch => {
  try {
    // Post request to login
    const {
      data: { success, authToken }
    } = await backendApi.post("/users/login", {
      username,
      password
    });

    // Change state to login: true
    if (success) {
      dispatch({ type: LOGIN_USER });
    }

    // Save authentication token in client
    if (!localStorage.getItem("authToken")) {
      localStorage.setItem("authToken", authToken);
    }

    //Redirect to user dashboard
    history.push("/");
  } catch ({
    response: {
      data: { message }
    }
  }) {
    console.log(message);
  }
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

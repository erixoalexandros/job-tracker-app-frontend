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
    localStorage.setItem("authToken", authToken);

    //Redirect to user dashboard
    history.push("/");
  } catch ({
    //If error print error message sent from the server
    response: {
      data: { message }
    }
  }) {
    console.log(message);
  }
};

export const logoutUser = () => {
  // Remove authentication token in client
  localStorage.removeItem("authToken");
  return {
    type: LOGOUT_USER
  };
};

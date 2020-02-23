import { FETCH_JOBS } from "../action_constants";
import backendApi from "../apis/backend";

export const fetchJobs = () => async dispatch => {
  try {
    const { data } = await backendApi.get("jobs/", {
      headers: {
        "x-auth-token": localStorage.getItem("authToken")
      }
    });

    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};

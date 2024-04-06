import axios from "../../config/axios";
import {
  createdjob,
  jobsFound
} from "../Reducers/jobsReducers";

export const fetchJobs = () => async (dispatch) => {
  try {
    const response = await axios.get("/");

    if (response.data && response.data.job) {
      dispatch(jobsFound(response.data.job));
    } else {
      console.error("Unexpected response structure:", response.data);
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

export const CreateJob = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/employe/jobs/create`, formData);
    console.log(response.data)
    dispatch(createdjob(response.data.newinternship));
  } catch (error) {
    console.log(error);
  }
};


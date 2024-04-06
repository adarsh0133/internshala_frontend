import axios from "../../config/axios";
import { resumeFound } from "../Reducers/resumeReducers";

export const fetchResumeAsync = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/resume");
    dispatch(resumeFound(data.loggedinuserresume));
  } catch (error) {
    console.log(error);
  }
};

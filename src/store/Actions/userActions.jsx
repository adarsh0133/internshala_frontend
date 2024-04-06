import { saveUser, removeUser, setError } from "../Reducers/userReducers";
import axios from "../../config/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student");
      dispatch(saveUser(data.student));
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data.message || "An error occurred"));
    }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
    dispatch(setError(error.response.data.message || "An error occurred"));
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/login", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
    dispatch(setError(error.response.data.message || "An error occurred"));
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/student/logout");
    dispatch(removeUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncapplyinternship = (internshipId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/${internshipId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const applyjob = (jobId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/job/${jobId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncupdate = (formData , id) => async (dispatch) => {
  try {
    await axios.post(`/student/update/${id}`, formData);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
}

import { saveEmploye, removeEmploye } from "../Reducers/employeReducers";
import axios from "../../config/axios";

export const asynccurrentEmploye = () => async (dispatch, getState) => {
  try {
    try {
      const { data } = await axios.post("/employe/currentuser");
      // console.log(data.employe)
      dispatch(saveEmploye(data));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};

export const asyncEmployesignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/signup", user);
    dispatch(asynccurrentEmploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncEmployesignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/login", user);
    dispatch(asynccurrentEmploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncremoveEmploye = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/logout");
    dispatch(removeEmploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const employeupdate = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/update/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentEmploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

// export const asyncReadallInternships = () => async (dispatch) => {
//     try {
//         await axios.post("/employe/internship/read");
//         dispatch(asynccurrentEmploye());
//     } catch (error) {
//         console.log(error.response.data)
//     }
// }

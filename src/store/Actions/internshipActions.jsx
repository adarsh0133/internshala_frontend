import axios from "../../config/axios";
import {
  interdetail,
  internshipsFound,
  createdinternship,
} from "../Reducers/internshipReducers";

export const fetchInternships = () => async (dispatch) => {
  try {
    const {data}= await axios.get("/");
    dispatch(internshipsFound(data.internship));
  } catch (error) {
    console.log(error);
  }
};

// export const internshipdetail = (id) => async (dispatch) => {
//   try {
//     const response = await axios.post(`/internship/detail/${id}`);
//     dispatch(interdetail(response.data.internship));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const CreateInternship = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/employe/internship/create/`, formData);
    dispatch(createdinternship(response.data.newinternship));
  } catch (error) {
    console.log(error);
  }
};


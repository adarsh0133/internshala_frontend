import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResumeAsync } from "../store/Actions/resumeActions";
import { asyncupdate } from "../store/Actions/userActions";
// import { update } from "../store/Actions/userActions";

export default function Editresume(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.resumee);
  console.log(data)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    city: "",
    gender: "",
  });

  useEffect(() => {
    dispatch(fetchResumeAsync());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setFormData((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(asyncupdate(formData, data._id));
      dispatch(fetchResumeAsync());
      props.onClose();
    } catch (error) {
      error.response.data;
    }
  };

  if (!data) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <img
          className="w-[20%]"
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt=""
        />
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className=" z-10 flex items-center justify-center fixed min-h-full w-full p-10 bg-black/30">
        <div className="h-fit py-5 px-10 rounded-3xl w-[30%] max-[600px]:w-[90%] bg-white ">
          <RiCloseLine
            size={30}
            className="ml-[52vh] max-[600px]:ml-[90%] cursor-pointer "
            onClick={props.onClose}
            color="#1c1c1c9d"
          />
          <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
            <h1>Personal details</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col items-center mt-3">
              <div className="size-36 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={data.avatar.url} alt="" />
              </div>
              <h1 className=" mt-1 text-2xl font-bold mb-2 text-[#272727c1]">
                Profile picture
              </h1>
              <button className="bg-blue-100 text-blue-400 border-dashed border-blue-500 border-[1px] py-3 px-7 rounded-lg font-medium text-2xl">
                Upload Profile Picture
              </button>
            </div>
            <div className=" mt-16 w-full flex gap-[5vh]">
              <div className="w-[50%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  First name
                </h1>
                <input
                  className="w-full pl-[2vh] text-2xl text-black outline-sky-300  h-[6vh] border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="firstname"
                  id=""
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="john"
                />{" "}
                {formData.firstname && formData.firstname.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
              <div className="w-[50%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  Last name
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  name="lastname"
                  id=""
                  placeholder="doey"
                />{" "}
                {formData.lastname && formData.lastname.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Email
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="email"
                id=""
                value={formData.email}
                onChange={handleChange}
              />
              {formData.email && !/^\S+@\S+\.\S+$/.test(formData.email) && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <div className="flex w-full">
              <div className="w-[50%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Contact number
                </h1>
                <input
                  className="w-[90%] pl-[2vh] h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="contact"
                  id=""
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Add contact details"
                  onKeyPress={(e) => {
                    // Allow only numbers
                    const pattern = /[0-9]/;
                    const isValidInput = pattern.test(e.key);
                    if (!isValidInput) {
                      e.preventDefault();
                    }
                  }}
                />
                {formData.contact && !/^\d{10}$/.test(formData.contact) && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter a valid 10-digit contact number
                  </p>
                )}
              </div>
              <div className="w-[50%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  City
                </h1>
                <input
                  className="w-[90%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="city"
                  id=""
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="add city details"
                />
                {formData.city && formData.city.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="w-[50%]">
              <h1 className="  mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Gender
              </h1>
              <input
                className=" lowercase  w-[90%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="gender"
                id=""
                value={formData.gender}
                onChange={handleChange}
                placeholder="male/female"
              />
              {formData.gender &&
                !["male", "female"].includes(formData.gender.toLowerCase()) && (
                  <p className="text-xl mt-1 text-red-500">
                    Please select either "male" or "female".
                  </p>
                )}
            </div>
              <button
                type="submit"
                disabled={
                  !formData.contact ||
                  formData.contact.length !== 10 || // Disable if contact number length is not 10
                  !formData.firstname ||
                  formData.firstname.length < 3 || // Disable if first name length is less than 3
                  !formData.lastname ||
                  formData.lastname.length < 3 || // Disable if last name length is less than 3
                  !formData.city ||
                  formData.city.length < 3 || // Disable if city length is less than 3
                  // Disable if organization name length is less than 3
                  !formData.email || // Disable if email is empty
                  !/^\S+@\S+\.\S+$/.test(formData.email) // Disable if email is not valid
                }
                className={`px-[4vh] py-[2vh] ml-[40vh] max-[600px]:ml-[15vh] text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] cursor-pointer`}
              >
                Update
              </button>
          </form>
        </div>
      </div>
    </>
  );
}

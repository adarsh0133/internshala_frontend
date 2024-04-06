import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asynccurrentUser,
  asyncremoveUser,
} from "../store/Actions/userActions";
import { Link } from "react-router-dom";

export default function Studentdropdown(props) {
  const dispatch = useDispatch();
  const loggedinuser = useSelector((state) => state.userReducers);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await dispatch(asyncremoveUser());
      window.location.href = "/"; 
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  if (!loggedinuser.user) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold">
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
      <div className=" p-10  z-10 w-[40vh] bg-white shadow-2xl absolute right-[20vh] top-[10.8vh] ">
        <h1
          className="text-2xl flex items-end justify-end cursor-pointer w-full font-semibold text-[#0000009a] "
          onClick={props.onClose}
        >
          Close
        </h1>
        <div className=" flex gap-1">
          <div className=" text-3xl font-semibold text-[#131313ef]">
            {loggedinuser.user.firstname}
          </div>
          <div className="text-3xl bottom-2 font-semibold text-[#131313ef]">
            {loggedinuser.user.lastname}
          </div>
        </div>
        <div className=" border-b-2  pb-6 text-2xl font-semibold  text-[#212121d7] ">
          {loggedinuser.user.email}
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          <Link to="/">Home</Link>
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          <Link to="/student/applications">My Applications</Link>
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          <Link to="/resume">Edit Resume</Link>
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          Edit Prefrences
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          Manage Account
        </div>
        <br />
        <div className="text-2xl font-semibold bg-red-400 text-[#ffffffd7] whitespace-nowrap rounded-xl w-[fit-content] px-[1.5vh] py-[.5vh] ml-[23vh]">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </>
  );
}

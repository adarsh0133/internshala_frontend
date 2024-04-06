import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  asynccurrentEmploye,
  asyncremoveEmploye,
} from "../store/Actions/employeActions";

export default function Employedropdown(props) {
  const dispatch = useDispatch();
  const loggedinuser = useSelector((state) => state.employeReducers);

  useEffect(() => {
    dispatch(asynccurrentEmploye());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await dispatch(asyncremoveEmploye());
      window.location.href = "/";
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  if (!loggedinuser.employe) {
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
            {loggedinuser.employe.firstname}
          </div>
          <div className="text-3xl bottom-2 font-semibold text-[#131313ef]">
            {loggedinuser.employe.lastname}
          </div>
        </div>
        <div className=" border-b-2  pb-6 text-2xl font-semibold  text-[#212121d7] ">
          {loggedinuser.employe.email}
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          <Link to="/employe">Home</Link>
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          <Link to="/editprofile/">Edit Profile</Link>
        </div>
        <br />
        <div className="text-2xl font-semibold  text-[#212121d7] ">
          Manage Account
        </div>
        <br />
        <div className="text-2xl font-semibold bg-red-400 text-zinc-50 whitespace-nowrap rounded-xl w-[fit-content] px-[1.5vh] py-[.5vh] ml-[23vh]">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </>
  );
}

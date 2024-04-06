import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  asynccurrentUser,
} from "../store/Actions/userActions";
import Dropdown from "./StudentDropdown";

import "../../public/stylesheet/home.css";
import "tailwindcss/tailwind.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Internships from "./Internships";
import Jobs from "./Jobs";
import {
  RiArrowLeftLine,
  RiArticleLine,
  RiBookmarkLine,
} from "@remixicon/react";

export default function Applications() {
  const [showLogin, setShowLogin] = useState(false);
  const [ShowDropdown, setShowDropdown] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  const opendropdown = () => {
    setShowDropdown(true);
  };
  const closedropdown = () => {
    setShowDropdown(false);
  };

  const dispatch = useDispatch();
  const loggedinuser = useSelector((state) => state.userReducers);
  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(asyncAppliedJobs());
  //   dispatch(asyncAppliedIntern());
  // },[dispatch]);


  if (!loggedinuser.user) {
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
  // console.log(loggedinuser.user.appliedjobs);
  // console.log(loggedinuser.user.appliedinternships);

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}

      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%] ml-[20vh] "
            src="../../public/images/logo.webp"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl">Internships</h3>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl">Jobs</h3>
        </div>
        <div className="flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <RiBookmarkLine
            size={20}
            className="mt-1"
            color="#1a1a1aa8" // set custom `width` and `height`
          />
        </div>
        <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            onClick={opendropdown}
            className="h-16 w-16 object-cover rounded-full"
            src={loggedinuser.user.avatar.url}
            alt=""
          />
        </div>
      </div>
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <img src="../../public/images/application1.png" alt="" />
      <div className=" w-full flex items-center justify-center text-5xl text-[#1f1f1fdf] font-bold">
        My applications
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex justify-center items-center  ">
        <div className="w-[70%] rounded-2xl border-2 ">
          <div className="w-full px-[5vh] h-[10vh] bg-[#F8F8F8] flex justify-between items-center ">
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Company
            </div>
            <div className="  w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Profile
            </div>
            <div className="  w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              type
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Number of <br />
              openings
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Review application
            </div>
          </div>
          {loggedinuser.user.appliedinternships &&
            loggedinuser.user.appliedinternships.map((item, index) => (
              <div
                key={index}
                className="w-full border-[1px] px-[5vh] justify-between items-center flex h-[12vh]"
              >
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.employe && <>{item.employe.organizationname}</>}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.profile || item.jobtitle}
                </div>
                <div className=" w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.internshiptype || item.jobtype}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.openings}
                </div>
                <div className="  w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                  <Link
                    className="flex gap-5"
                    to={
                      item.profile
                        ? `/internship/detail/${item._id}`
                        : `/job/detail/${item._id}`
                    }
                  >
                    <RiArticleLine size={20} className="mt-0" />
                    Preview
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center  mt-5">
        <div className="w-[70%] rounded-2xl border-2 ">
          <div className="w-full px-[5vh] h-[10vh] bg-[#F8F8F8] flex justify-between items-center ">
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Company
            </div>
            <div className="  w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Profile
            </div>
            <div className="  w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              type
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Number of <br />
              Applicants
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Review application
            </div>
          </div>
          {loggedinuser.user.appliedjobs &&
            loggedinuser.user.appliedjobs.map((item, index) => (
              <div
                key={index}
                className="w-full border-[1px] px-[5vh] justify-between items-center flex h-[12vh]"
              >
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.employe && <>{item.employe.organizationname}</>}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.profile || item.jobtitle}
                </div>
                <div className=" w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.internshiptype || item.jobtype}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                  {item.openings}
                </div>
                <div className="  w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                  <Link
                    className="flex gap-5"
                    to={
                      item.profile
                        ? `/internship/detail/${item._id}`
                        : `/job/detail/${item._id}`
                    }
                  >
                    <RiArticleLine size={20} className="mt-0" />
                    Preview
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Internships />
      <Jobs />
    </>
  );
}

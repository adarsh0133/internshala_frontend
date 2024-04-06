import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asynccurrentEmploye } from "../store/Actions/employeActions"; // Import the action creator
import { Link, useParams } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiArticleLine,
  RiBookmarkLine,
  RiFileList3Line,
} from "@remixicon/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Review() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducers);

  useEffect(() => {
    dispatch(asynccurrentEmploye());
  }, [dispatch]);

  console.log(employe);

  // Check if employee data exists before rendering
  if (!employe) {
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

  // Check if internships exist before rendering
  if (!employe.employe.internships) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <p>No internships found.</p>
      </div>
    );
  }
  if (!employe.employe.jobs) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <p>No internships found.</p>
      </div>
    );
  }

  let internship; // Declare internship variable outside of the loop
  const newa = [...employe.employe.jobs, ...employe.employe.internships];
  newa.forEach((element) => {
    // console.log(element);
    if (element._id === id) {
      internship = element; 
    }
  });

    console.log(internship); 

  return (
    <>
      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%] ml-[20vh] "
            src="../../public/images/logo.webp"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl text-cyan-600"> + Internship</h3>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl text-cyan-600"> + Create Job</h3>
        </div>
        <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={employe.employe.organizationlogo.url}
            alt=""
          />
        </div>
      </div>
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <h1 className="w-full flex items-center justify-center mt-[10vh]  text-4xl">
        {internship.students.length} Applications for {internship.profile}
      </h1>
      <div className="w-full mb-[10vh] flex items-center justify-center">
        <div className="w-[70%] mt-[5vh]  border-2 rounded-xl ">
          <div className="w-full px-[5vh] h-[10vh] bg-[#F8F8F8] flex justify-between items-center ">
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Name
            </div>
            <div className="  w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Email
            </div>
            <div className="  w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Contact
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              City
            </div>
            <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
              Resume
            </div>
          </div>
          {internship.students &&
            internship.students.map((item, index) => (
              <div
                key={index}
                className="w-full border-[1px] px-[5vh] justify-between items-center flex h-[12vh]"
              >
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd]  font-medium ">
                  {item.firstname} {item.lastname}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd]  font-medium ">
                  {item.email}
                </div>
                <div className=" w-[20%]  text-2xl text-[#1f1f1fbd]  font-medium ">
                  {item.contact}
                </div>
                <div className=" w-[20%] text-2xl text-[#1f1f1fbd]  font-medium ">
                  {item.city}
                </div>
                <div className="  w-[20%] text-2xl text-[#008cff]  font-medium ">
                  <Link
                    className="flex gap-5"
                    to={`/resume/preview/${item._id}`}
                  >
                    <RiFileList3Line size={20} className="mt-0" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <img src="../../public/images/footer.png" alt="" />
    </>
  );
}

export default Review;

import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiBookmarkLine,
  RiDeleteBack2Fill,
  RiDeleteBin2Fill,
  RiDeleteBin2Line,
  RiDownload2Fill,
  RiPencilLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import Studentdropdown from "./StudentDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchResumeAsync } from "../store/Actions/resumeActions";
import Editresume from "./Editresume";

const Resume = () => {
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [personalDets, setpersonalDets] = useState(false);

  const opendropdown = () => {
    setShowDropdown(true);
  };
  const closedropdown = () => {
    setShowDropdown(false);
  };
  const handleEditClick = () => {
    setpersonalDets(true);
  };
  const handleCloseClick = () => {
    setpersonalDets(false);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.resumee);


  useEffect(() => {
    dispatch(fetchResumeAsync());
  }, [dispatch]);

  //   if (!resume) {
  //     return (
  //       <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
  //         <img
  //           className="w-[20%]"
  //           src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
  //           alt=""
  //         />
  //         Loading...
  //       </div>
  //     );
  //   }
  return (
    data && (
      <>
        {ShowDropdown && <Studentdropdown onClose={closedropdown} />}
        {personalDets && <Editresume onClose={handleCloseClick} />}
        <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
          <div className="w-[70%] h-full">
            <img className="w-[15%] ml-[20vh]" src="/images/logo.jpeg" alt="" />
          </div>
          <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
            <h3 className="text-2xl">Internships</h3>
          </div>
          <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
            <h3 className="text-2xl">Jobs</h3>
          </div>
          <div className="flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
            <RiBookmarkLine size={20} className="mt-1" color="#1a1a1aa8" />
          </div>
          <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
            <button onClick={opendropdown}>
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={data.avatar.url}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="flex px-[90px] text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
          <RiArrowLeftLine size={20} />
          <Link to={-1}>Go back</Link>
        </div>
        <div className="flex justify-center items-center text-[#151515d2] text-5xl font-semibold w-full h-[10vh] ">
          Resume
        </div>
        <div className="w-[70%] h-fit m-auto p-32 border-2 rounded-lg">
          <div className="border-b-stone-300 border-b-[1px] pb-10">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <h1 className="text-5xl font-semibold">
                  {data.firstname} {data.lastname}
                </h1>
                <RiPencilLine
                  size={25}
                  className="mt-1 cursor-pointer"
                  color="#1c1c1c9d"
                  onClick={handleEditClick}
                />
              </div>
              <div className="flex items-center gap-3 text-blue-400 cursor-pointer">
                <RiDownload2Fill
                  size={25}
                  className="mt-1 cursor-pointer"
                  color="#1c1c1c9d"
                />
                <h1 className="text-3xl">Download</h1>
              </div>
            </div>
            <h3 className="text-2xl text-zinc-600 font-medium mt-2">
              {data.email}
            </h3>
            <h3 className="text-2xl text-zinc-600 font-medium mt-2">
              +91 {data.contact}
            </h3>
            <h3 className="text-2xl text-zinc-600 font-medium mt-2">Bhopal</h3>
          </div>
          <div className="border-b-stone-300 border-b-[1px] py-10 flex justify-between">
            <h1 className="text-2xl text-zinc-500 font-semibold w-[35%]">
              Education
            </h1>
            <div className="w-[40%] ">
              <h1 className="text-2xl font-semibold">
                {data.resume.education}
              </h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                Sagar Institute Of Research & Technology(SIRT)
              </h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                2021 - 2025
              </h1>
              <h2 className="text-2xl text-blue-400 font-semibold mt-5 cursor-pointer">
                + Add education
              </h2>
            </div>
            <div className="flex gap-5 w-[25%] justify-end">
              <RiPencilLine
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
              <RiDeleteBin2Line
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
            </div>
          </div>
          <div className="border-b-stone-300 border-b-[1px] py-10 flex justify-between">
            <h1 className="text-2xl text-zinc-500 font-semibold w-[35%]">
              WORK EXPERIENCE
            </h1>
            <div className="w-[40%]">
              <h1 className="text-2xl font-semibold">Junior Web Developer</h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                Internshala, Virtual
              </h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                Job • Mar 2024 - Mar 2024 (1 month)
              </h1>
              <h2 className="text-2xl text-blue-400 font-semibold mt-5 cursor-pointer">
                + Add education
              </h2>
            </div>
            <div className="flex gap-5 w-[25%] justify-end">
              <RiPencilLine
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
              <RiDeleteBin2Line
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
            </div>
          </div>
          <div className="border-b-stone-300 border-b-[1px] py-10 flex justify-between">
            <h1 className="text-2xl text-zinc-500 font-semibold w-[35%]">
              POSITIONS OF RESPONSIBILITY
            </h1>
            <div className="w-[40%]">
              <h1 className="text-2xl font-medium text-zinc-500">
                i lead my team in state level hackathon
              </h1>
              <h2 className="text-2xl text-blue-400 font-semibold mt-5 cursor-pointer">
                + Add position of responsibility
              </h2>
            </div>
            <div className="flex gap-5 w-[25%] justify-end">
              <RiPencilLine
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
              <RiDeleteBin2Line
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
            </div>
          </div>

          <div className="border-b-stone-300 border-b-[1px] py-10 flex justify-between">
            <h1 className="text-2xl text-zinc-500 font-semibold w-[35%]">
              WORK EXPERIENCE
            </h1>
            <div className="bg-red-300 w-[40%]">
              <h1 className="text-2xl font-semibold">Junior Web Developer</h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                Internshala, Virtual
              </h1>
              <h1 className="text-2xl font-medium text-zinc-500 mt-3">
                Job • Mar 2024 - Mar 2024 (1 month)
              </h1>
              <h2 className="text-2xl text-blue-400 font-semibold mt-5 cursor-pointer">
                + Add education
              </h2>
            </div>
            <div className="flex gap-5 w-[25%] justify-end">
              <RiPencilLine
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
              <RiDeleteBin2Line
                size={25}
                className="mt-1 cursor-pointer"
                color="#1c1c1c9d"
              />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Resume;

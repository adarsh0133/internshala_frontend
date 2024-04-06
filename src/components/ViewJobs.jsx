import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchJobs } from "../store/Actions/jobsActions";
import "../../public/stylesheet/internshipdetail.css";

import {
  RiArrowLeftLine,
  RiCalendarLine,
  RiDoorOpenLine,
  RiGroupLine,
  RiMapPinLine,
  RiPlayCircleLine,
  RiWallet3Line,
} from "@remixicon/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { applyjob } from "../store/Actions/userActions";
import Login from "./StudentLogin";

const ViewInternship = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.jobs);
  const { isAuth,user } = useSelector((state) => state.userReducers);
  const { isAuthh } = useSelector((state) => state.employeReducers);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleApply = () => {
    if (isAuth) {
      dispatch(applyjob(id));
      toast.success("Job Applied Successfully!");
    } else {
      setShowLogin(true);
    }
  };

  const selectedJob = data && data.find((job) => job._id === id);
  console.log(selectedJob);

  const currentUserType = isAuth ? 'student' : isAuthh ? 'employee' : '';
  const userId = user ? user._id : null;
  const isCreatedByCurrentUser = () => {
    if (currentUserType === 'student' && selectedJob.students.includes(userId)) {
      // If the current user is a student and has already applied to the job, don't render the button
      return true;
    }

    if (currentUserType === 'employee' && selectedJob.employe._id === userId) {
      // If the current user is an employee and is the creator of the job, don't render the button
      return true;
    }

    return false;
  };

  useEffect(() => {
    dispatch(fetchJobs());
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
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
    data && (
      <>
        {/* <div className="homenav">
        <div className="homenavleft">
          <img src="../../public/images/logo.webp" alt="" />
          <h2>Internships</h2>
          <h2>Jobs</h2>
          <h2>Courses</h2>
        </div>
        <div className="homenavright">
          <button className="font-bold text-xl">Search</button>
          <button className="font-bold text-xl">Login</button>
          <button className="font-bold text-xl">Candidate Sign-up</button>
          <button className="font-bold text-xl">Employer Sign-up</button>
        </div>
      </div> */}
        <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
          <RiArrowLeftLine size={20} />
          <Link to={-1}>Go back</Link>
        </div>
        <div className="interparent">
          <h1 className="font-semibold">{selectedJob.jobtitle}</h1>
          <div className="interparent2">
            <button className="font-semibold text-xl">
              <img src="../../public/images/stock.png" alt="" />
              Actively hiring
            </button>
            <div className="w-full h-24 flex ">
              <div className="w-[50%]">
                <h3 className="text-3xl font-semibold  text-[#090909e0]  ">
                  {selectedJob.jobtitle}
                </h3>
                <h4 className="text-2xl font-semibold mt-1  text-[#212121c5] ">
                  {selectedJob.employe.organizationname}
                </h4>
              </div>
              <div className="w-[50%] flex justify-end">
                <img
                  className="w-[20%] h-full object-cover"
                  // src={selectedJob.employe.organizationlogo.url}
                  alt=""
                />
              </div>
            </div>
            <div className="flex mt-2 gap-2 align-middle ">
              <RiMapPinLine size={15} color="#1a1a1aa8" />
              <h2 className="text-2xl">{selectedJob.jobtype}</h2>
            </div>
            <div className=" mt-6 w-full h-24  flex">
              <div className="w-[25%] h-full ">
                <div className="flex gap-2 align-middle ">
                  <RiPlayCircleLine
                    size={15}
                    className="mt-1"
                    color="#1a1a1aa8"
                  />
                  <h3 className="text-[.9vw] font-semibold  text-[#212121c5] ">
                    START DATE
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                    {selectedJob.from || <>Immediately</>}
                  </h1>
                </div>
              </div>
              <div className="w-[25%] h-full ">
                <div className="flex gap-2 align-middle ">
                  <RiCalendarLine
                    size={15}
                    className="mt-1"
                    color="#1a1a1aa8"
                  />
                  <h3 className="text-[.9vw] font-semibold  text-[#212121c5] ">
                    Experience
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                    0-1 Years
                  </h1>
                </div>
              </div>
              <div className="w-[25%] h-full ">
                <div className="flex gap-2 align-middle ">
                  <RiWallet3Line size={15} className="mt-1" color="#1a1a1aa8" />
                  <h3 className="text-[.9vw] font-semibold  text-[#212121c5] ">
                    CTC ( ANNUAL )
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                    ₹ {selectedJob.salary}/Year
                  </h1>
                </div>
              </div>
              <div className="w-[25%] h-full">
                <div className="flex gap-2 align-middle ">
                  <RiDoorOpenLine
                    size={15}
                    className="mt-1"
                    color="#1a1a1aa8"
                  />
                  <h3 className="text-[.9vw] font-semibold  text-[#212121c5] ">
                    OPENINGS
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                    Total {selectedJob.openings}
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
              <button className="interbtn font-semibold text-1xl  ">
                Internship
              </button>
            </div>
            <div className=" flex align-middle items-center gap-2 al mt-[-2vh] mb-5 text-xl font-semibold text-[#090909c1]  ">
              <RiGroupLine size={15} className="mt-1" color="#1a1a1aa8" />
              <h3 className="mt-1">{selectedJob.students.length} Applicants</h3>
            </div>
            <hr />
            <div className="">
              <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                About the internship
              </h3>
              <div className=" mt-4 text-2xl ">
                <h3 className="font-semibold text-[#2b2b2bd2]    ">
                  {selectedJob.responsibility}
                </h3>
              </div>
              <div className=" mt-10">
                <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                  Skill(s) required
                </h3>
              </div>
              <div className=" mt-4 text-2xl ">
                <h3 className="font-semibold text-[#2b2b2bd2]    ">
                  {selectedJob.skills}
                </h3>
              </div>
              <div className=" mt-10">
                <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                  Perks
                </h3>
              </div>
              <div className=" mt-4 text-2xl ">
                <h3 className="font-semibold text-[#2b2b2bd2]    ">
                  {selectedJob.perks}{" "}
                </h3>
              </div>
              <div className=" mt-10">
                <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                  Assessment
                </h3>
              </div>
              <div className=" mt-4 text-2xl ">
                <h3 className="font-semibold text-[#2b2b2bd2]    ">
                  {selectedJob.assesments}
                </h3>
              </div>
            </div>
            <div className=" w-full h-5 flex justify-center align-middle mt-[10vh] ">
              {!isCreatedByCurrentUser() && (
                <button
                  className="w-[18vh] h-[6vh] text-white font-semibold text-2xl rounded-xl bg-[#008bdcf2]"
                  onClick={handleApply}
                >
                  Apply now
                </button>
              )}
            </div>
          </div>
          <div className="mt-24">
            <img src="../../public/images/homefooter.png" alt="" />
          </div>
        </div>
        {showLogin && (
          <div
            style={{
              position: "fixed", // Keeps the modal in place
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              zIndex: 1000, // Ensures it's above other content
            }}
          >
            <Login onClose={handleLoginClose} />
          </div>
        )}
        <ToastContainer />
      </>
    )
  );
};

export default ViewInternship;

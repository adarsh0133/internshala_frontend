import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentEmploye } from "../store/Actions/employeActions";
import { CreateJob } from "../store/Actions/jobsActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

function createJob() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { employe } = useSelector((state) => state.employeReducers);
  const [formData, setFormData] = useState({
    jobtype: "In office",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(CreateJob(formData));
      dispatch(asynccurrentEmploye());
      navigate("/employe");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    dispatch(asynccurrentEmploye()); 
    // dispatch(CreateInternship());
  }, [dispatch]);

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
          <Link to={"/internship/create"}>
            <h3 className="text-2xl text-cyan-600">+ Internship</h3>
          </Link>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <Link to={"/job/create"}>
            <h3 className="text-2xl text-cyan-600"> + Create Job</h3>{" "}
          </Link>
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
        <Link to={"/employe"}>Go back</Link>
      </div>
      <h1 className="w-full flex items-center justify-center mt-[5vh] text-4xl font-semibold">
        Create Job
      </h1>
      <div className=" z-10 flex p-10  justify-center  h-fit w-full  ">
        <div className=" border-2 px-[5vh] mt-10 h-fit rounded-3xl w-[50%] bg-white">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Enter Jobtitle
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="jobtitle"
                onChange={handleChange}
                placeholder="eg.Web developer"
                id=""
              />
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Prefrences
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="prefrences"
                placeholder="eg. music ,dancing"
                id=""
              />
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Assesments
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="assesments"
                placeholder="eg. paper"
                id=""
              />
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Skills
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="skills"
                placeholder="eg. Data Analytics , Data Handling"
                id=""
              />
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Perks
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="perks"
                placeholder="eg.gym membership"
                id=""
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[48%] ">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  salary
                </h1>
                <div className=" flex gap-10">
                  <input
                    className="w-[100%] px-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="text"
                    onChange={handleChange}
                    name="salary"
                    placeholder="eg.60000 LPA"
                  />
                </div>
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  jobtype
                </h1>
                <select
                  className="w-[100%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  name="jobtype"
                  defaultValue={"In office"}
                  onChange={handleChange}
                  id=""
                >
                  <option value="In office">In office</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Openings
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="openings"
                  placeholder="eg. 50"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Description
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  placeholder="eg. enter job description"
                  id=""
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-[4vh] mb-10 mt-10 py-[2vh] ml-[35vh] text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] "
            >
              Create Internship
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default createJob;

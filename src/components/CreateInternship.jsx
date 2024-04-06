import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentEmploye} from "../store/Actions/employeActions";
import { CreateInternship } from "../store/Actions/internshipActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

function createInternship() {
  const dispatch = useDispatch(); // Get dispatch function
  const navigate = useNavigate();
  const { employe } = useSelector((state) => state.employeReducers);
  const [formData, setFormData] = useState({
    internshiptype: "In office",
    stipend: {
      status: "Fixed", // Set default value for status
      amount: "", // Initialize amount
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "amount" || e.target.name === "status") {
      // If the input name is "amount" or "status", update the stipend object
      setFormData({
        ...formData,
        stipend: {
          ...formData.stipend,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      // For other inputs, update directly
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(CreateInternship(formData));
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
        Create Internship
      </h1>
      <div className=" z-10 flex p-10  justify-center  h-fit w-full  ">
        <div className=" border-2 px-[5vh] mt-5 rounded-3xl w-[50%] bg-white h-fit">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Enter Profile
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="profile"
                onChange={handleChange}
                placeholder="eg.Web developer"
                id=""
              />
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Responsibility
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="responsibility"
                placeholder="eg.Managing Database"
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
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Skills
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="skills"
                placeholder="eg.Development,Data Analytics"
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
                placeholder="eg.paper"
                id=""
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[48%] ">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Stipend
                </h1>
                <div className=" flex gap-10">
                  <select
                    className="w-[50%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    name="status"
                    defaultValue={"Fixed"}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="Fixed">Fixed</option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Performance Based">Performance Based</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                  <input
                    className="w-[50%] px-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="text"
                    onChange={handleChange}
                    name="amount"
                    placeholder="eg.20000"
                    id=""
                  />
                </div>
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Internshiptype
                </h1>
                <select
                  className="w-[100%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  name="internshiptype"
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
                  Duration
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="duration"
                  onChange={handleChange}
                  placeholder="eg. 3-6 months"
                  id=""
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Starting Date
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  onChange={handleChange}
                  name="from"
                  placeholder="eg.2 Feburary 2024"
                  id=""
                />
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Last Date
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="to"
                  onChange={handleChange}
                  placeholder="eg. 3 March 2024"
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

export default createInternship;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignup } from "../store/Actions/userActions";
import {useNavigate } from "react-router-dom";
import Login from "./StudentLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const { isAuth } = useSelector((state) => state.userReducers);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncsignup(formData));
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);

  return (
    <>
      <div className="w-full h-full">
        <nav className="signup-nav py-7 px-[10vh]">
          <div className="w-[113px] h-[31px] bg-[length:245px]  bg-[url('https://internshala.com//static/images/home/sprites/assets.png')]"></div>
        </nav>
        <hr />
        <div className="w-full h-full flex items-center flex-col justify-center gap-5 bg-cover bg-[url('https://internshala.com/static/images/registration/student_new/background.png')]">
          <h1 className="text-7xl font-bold">Sign-up and apply for free</h1>
          <h2 className="text-4xl font-semibold opacity-80">
            1,50,000+ companies hiring on Internshala
          </h2>
          <div className="card flex gap-4 flex-col w-[63vh] h-[70vh] mt-5 bg-white rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]  shadow-cyan-500/50 p-10">
            <button className="w-full flex items-center justify-center gap-5 border-2 p-5 rounded-lg text-3xl font-semibold opacity-80">
                <img className="w-[20px]" src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg" alt="" />
              Sign up with Google
            </button>
            <div className="flex items-center justify-center gap-10 opacity-70">
              <div className="w-1/3 h-[1px] bg-zinc-700"></div>
              <h1 className="text-3xl font-bold">OR</h1>
              <div className="w-1/3 h-[1px] bg-zinc-700"></div>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Two-way data binding: Set input values based on state */}
              <label className="text-2xl font-medium" htmlFor="name">
                Email
              </label>
              <input
                className="w-full h-[40px] border-2 rounded p-4 text-2xl focus:outline-blue-500 focus:outline-[1px] my-5"
                type="text"
                id="name"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />

              <label className="text-2xl font-medium" htmlFor="age">
                Password
              </label>
              <input
                className="w-full h-[40px] border-2 rounded p-4 text-2xl focus:outline-blue-500 focus:outline-[1px] my-5"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="must be atleat 6 charaters"
              />

              <div className="flex justify-between">
                <div>
                  <label className="text-2xl font-medium" htmlFor="contact">
                    First Name
                  </label>
                  <br />
                  <input
                    className="w-full h-[40px] border-2 rounded p-4 text-2xl focus:outline-blue-500 focus:outline-[1px] my-5"
                    type="text"
                    id="firstName"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="john"
                  />
                </div>

                <div>
                  <label className="text-2xl font-medium" htmlFor="password">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="w-full h-[40px] border-2 rounded p-4 text-2xl focus:outline-blue-500 focus:outline-[1px] my-5"
                    type="text"
                    id="lastName"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="doe"
                  />
                </div>
              </div>
              <h1 className="text-xl font-medium">By signing up, you agree to our <span className="text-[#008BDC]">Terms and Conditions.</span></h1>
              <input type="submit" className="w-full text-2xl font-semibold bg-[#008BDC] p-5 rounded text-zinc-50 mt-4"/>
              <h1 className="text-2xl font-semibold mt-5 text-center">Already registered? <span onClick={handleLoginClick} className="text-[#008BDC] cursor-pointer">Login</span></h1>
            </form>
          </div>
        </div>
        {showLogin && <Login onClose={handleLoginClose} />}
      </div>
    </>
  );
};

export default Signup;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncEmployesignup } from "../store/Actions/employeActions";
import { Link, useNavigate } from "react-router-dom";
// import "../../public/stylesheet/signup.css";
import "../../public/stylesheet/employesignup.css";
import EmployeLogin from "../components/EmployLogin";

export default function EmployeSignup() {
  const navigate = useNavigate();
  const { isAuthh } = useSelector((state) => state.employeReducers);
  console.log(isAuthh)
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contact: "",
  });

  const employehandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signupemploye = (event) => {
    event.preventDefault();
    dispatch(asyncEmployesignup(formData));
  };
  useEffect(() => {
    if (isAuthh) {
      navigate("/employe");
    }
  }, [isAuthh, navigate]);

  return (
    <>
      <div className="logo">
        <img src="/images/logo.jpeg" alt="" />
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
      <div className="employecontainer">
        <div className="employeformbox">
          <form>
            <h4>Official Email Id</h4>
            <input
              className="text-2xl focus:outline-blue-500 focus:outline-[1px]"
              type="text"
              name="email"
              value={formData.email}
              onChange={employehandleChange}
              placeholder="john@example.com"
            />
            <h4>Password</h4>
            <input
              className="text-2xl focus:outline-blue-500 focus:outline-[1px]"
              type="password"
              name="password"
              value={formData.password}
              onChange={employehandleChange}
              placeholder="Must be at least 6 characters"
            />
            <h4>First Name</h4>
            <input
              className="text-2xl focus:outline-blue-500 focus:outline-[1px]"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={employehandleChange}
              placeholder="John"
            />
            <h4>Last Name</h4>
            <input
              className="text-2xl focus:outline-blue-500 focus:outline-[1px]"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={employehandleChange}
              placeholder="Doe"
            />
            <h4>Mobile Number</h4>
            <input
              className="text-2xl focus:outline-blue-500 focus:outline-[1px]"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={employehandleChange}
              placeholder="123456789"
            />
            <h5>By signing up, you agree to our <span className="text-blue-500">Terms and Conditions.</span></h5>
            <button onClick={signupemploye} id="employeformbtn">
              Post for Free
            </button>
          </form>
          <h4>
            Already registered?{" "}
            <Link to="#" onClick={() => setShowLogin(true)}>
              Login
            </Link>
          </h4>
        </div>
      </div>
      {showLogin && <EmployeLogin onClose={handleLoginClose} />}
    </>
  );
}

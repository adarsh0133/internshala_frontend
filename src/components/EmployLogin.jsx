import React, { useEffect, useState } from "react";
import "../../public/stylesheet/login.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiCloseLine } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncEmployesignin } from "../store/Actions/employeActions";

function Login({ onClose }) {
  const navigate = useNavigate();
  const { isAuthh } = useSelector((state) => state.employeReducers);
  const dispatch = useDispatch();

  const [employeFormData, setEmployeFormData] = useState({
    employeemail: "",
    employepassword: "",
  });

  const handleEmployeChange = (e) => {
    setEmployeFormData({ ...employeFormData, [e.target.name]: e.target.value });
  };

  const signinEmploye = async (event) => {
    event.preventDefault();
    dispatch(asyncEmployesignin(employeFormData));
  };

  useEffect(() => {
    if (isAuthh) {
      navigate("/employe");
    }
  }, [isAuthh, navigate]);
  return (
    <>
      <div className="loginparent">
        <div className="loginbox">
          <RiCloseLine
            size={34} 
            className="my-icon" 
            onClick={onClose} 
          />
          <div className="loginnav">
            <h1 className="text-3xl font-semibold">Employer / T&P Login</h1>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <form action="">
                <h3>Email</h3>
                <input
                  type="text"
                  name="email"
                  id=""
                  value={employeFormData.email}
                  onChange={handleEmployeChange}
                  placeholder="john@example.com"
                />
                <h3>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={employeFormData.password}
                  onChange={handleEmployeChange}
                  id=""
                  placeholder="Must be at least 6 characters"
                />
                <h4>
                  <Link to="">forgot password?</Link>
                </h4>
                <button onClick={signinEmploye} id="formbtn">
                  Login
                </button>
                <h5>
                  New to internshala ? Register (
                  <Link to="/student/signup">student</Link>/
                  <Link to="/employe/signup">company</Link>)
                </h5>
              </form>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Login;

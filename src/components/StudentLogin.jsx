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
import { asyncsignin } from "../store/Actions/userActions";

function Login({ onClose }) {
  const navigate = useNavigate();
  const { isAuth,error } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();

  const [studentFormData, setStudentFormData] = useState({
    studentemail: "",
    studentpassword: "",
  });

  const handleStudentChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
  };

  const signinStudent = async (event) => {
    event.preventDefault();
      dispatch(asyncsignin(studentFormData));
  };


  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);
  return (
    <>
      <div className="loginparent h-[109.2vh]">
        <div className="loginbox">
          <RiCloseLine size={34} className="my-icon" onClick={onClose} />
          <div className="loginnav">
            <h1 className="text-4xl font-semibold">Student Login</h1>
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
                {error && <div className="error-message text-2xl font-normal text-red-600 text-center mr-[5vh]">{error}</div>}
                <h3>Email</h3>
                <input
                  type="text"
                  name="email"
                  value={studentFormData.email}
                  onChange={handleStudentChange}
                  placeholder="john@example.com"
                />
                <h3>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={studentFormData.password}
                  onChange={handleStudentChange}
                  placeholder="Must be at least 6 characters"
                />
                <h4>
                  <Link to="#">forgot password?</Link>
                </h4>
                <button onClick={signinStudent}  className="w-full bg-blue-500">
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

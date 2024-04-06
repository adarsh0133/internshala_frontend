import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asynccurrentUser, asyncremoveUser } from "../store/Actions/userActions";
import Login from "../components/StudentLogin";

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
import { RiBookmarkLine } from "@remixicon/react";
import Dropdown from "./StudentDropdown";
const Home = () => {
  const [showLogin, setShowLogin] = useState(false); 
  const [ShowDropdown, setShowDropdown] = useState(false);

  const opendropdown = () => {
    setShowDropdown(true); 
  };
  const closedropdown = () => {
    setShowDropdown(false); 
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const dispatch = useDispatch(); 
  const loggedinuser = useSelector((state) => state.userReducers); 
  useEffect(() => {
    dispatch(asynccurrentUser()); 
  }, [dispatch]);

  const LogoutHandler = () => {
    dispatch(asyncremoveUser());
};

  // Check if loggedinuser data exists before rendering
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

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}
      <div className=" flex items-center justify-between w-full px-[20vh] py-7 border-b-2">
        <div className="h-full">
          <div className="w-[113px] h-[31px] bg-[length:245px]  bg-[url('https://internshala.com//static/images/home/sprites/assets.png')]"></div>
        </div>
        <div className="flex items-center gap-10">
          <div className="font-semibold text-[#272727e4] h-full ">
            <h3 className="text-2xl">Internships</h3>
          </div>
          <div className="font-semibold text-[#272727e4] h-full ">
            <h3 className="text-2xl">Jobs</h3>
          </div>
          <div className="font-semibold text-[#272727e4] h-full ">
            <RiBookmarkLine
              size={20}
              className="mt-1"
              color="#1a1a1aa8" // set custom `width` and `height`
            />
          </div>
          <div className="font-semibold text-[#272727e4]">
            <button onClick={opendropdown}><img
              className="h-16 w-16 object-cover rounded-full"
              src={loggedinuser.user.avatar.url}
              alt=""
            /></button>
          </div>
        </div>
      </div>
      <div className="home1">
        <div className="text-6xl mb-[-5vh]">
          Hi, {loggedinuser.user.firstname}! 👋
        </div>

        <h2>Trending on Internshala 🔥 </h2>
        <div className="slides">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/wtc_fh_feb24-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/career_starter_internships_final-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <Internships />
      <Jobs />
      <img className="home" src="../../public/images/home.jpg" alt="" />
      <div className="marquee">
        <img
          src="https://internshala.com/static/images/homepage/top_companies.png"
          alt=""
        />
        <img
          src="https://internshala.com/static/images/homepage/top_companies.png"
          alt=""
        />
        <img
          src="https://internshala.com/static/images/homepage/top_companies.png"
          alt=""
        />
        <img
          src="https://internshala.com/static/images/homepage/top_companies.png"
          alt=""
        />
      </div>
      <img className="home2" src="../../public/images/home2.jpg" alt="" />
      {showLogin && <Login onClose={handleLoginClose} />}
    </>
  );
};

export default Home;

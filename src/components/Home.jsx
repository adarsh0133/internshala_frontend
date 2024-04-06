import React, { useState } from "react";
import "../../public/stylesheet/home.css";
import "tailwindcss/tailwind.css";
import Login from "../components/StudentLogin";

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
import { Link } from "react-router-dom";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleLoginClose = () => {
    setShowLogin(false);
  };
  return (
    <>
      <div className="homenav">
        <div className="homenavleft">
        <div className="mb-6">
          <div className="w-[113px] h-[31px] bg-[length:245px]  bg-[url('https://internshala.com//static/images/home/sprites/assets.png')]"></div>
        </div>
          <h2>Internships</h2>
          <h2>Jobs</h2>
          <h2>Courses</h2>
        </div>
        <div className="homenavright">
          <button className="font-bold text-xl">Search</button>
          <button onClick={handleLoginClick} className="font-bold text-xl">
            Login
          </button>
          <button className="font-bold text-xl">
            <Link to={`/student/signup`}>Candidate Sign-up</Link>
          </button>

          <button className="font-bold text-xl">
            <Link to={`/employe/signup`}>Employer Sign-up</Link>
          </button>
        </div>
      </div>
      <div className="home1">
        <h1>Make your dream career a reality</h1>
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
      <img className="home" src="/images/home.jpg" alt="" />
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
      <img className="home2" src="/images/homeFooter.png" alt="" />
      {showLogin && <Login onClose={handleLoginClose} />}
    </>
  );
}

import React, { useEffect } from "react";
import "../../public/stylesheet/internships.css";
import "tailwindcss/tailwind.css";

import {
  RiMapPinLine,
  RiWallet3Line,
  RiCalendarLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInternships } from "../store/Actions/internshipActions";
import { Link } from "react-router-dom";

export default function Internships() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.internship);

  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  return data && (
    <>
      <div className="internshipparent">
        <div className="interheading">
          <h1 className="font-semibold   ">
            Latest internships on Internshala
          </h1>
          <div className="category">
            <h3 className="font-semibold text-xl   ">POPULAR CATEGORIES:</h3>
            <button className="font-semibold text-xl   ">Big Brands</button>
            <button className="font-semibold text-xl   ">Work From Home</button>
            <button className="font-semibold text-xl   ">Part-time</button>
            <button className="font-semibold text-xl   ">MBA</button>
            <button className="font-semibold text-xl   ">Engineering</button>
            <button className="font-semibold text-xl   ">Media</button>
            <button className="font-semibold text-xl   ">Design</button>
            <button className="font-semibold text-xl   ">Data Science</button>
          </div>
        </div>
        <div className="inter">
          {data &&
            data.map((item, index) => (
              <div key={index} className="inters">
                <button className="font-semibold   ">
                  <img src="../../public/images/stock.png" alt="" />
                  <h3 className="font-semibold text-xl   ">Actively Hiring</h3>
                </button>
                <div className="interninfo">
                  <div className="intleft">
                    <h3 className="font-medium text-2xl   ">{item.profile}</h3>
                    {item.employe && (
                      <>
                        <h4 className="font-semibold text-1xl   ">
                          {item.employe.organizationname}
                        </h4>
                      </>
                    )}
                  </div>
                  <div className="intright">
                    {item.employe && (
                      <>
                        {/* <img src={item.employe.organizationlogo.url} alt="" /> */}
                      </>
                    )}
                  </div>
                </div>
                <div className="map">
                  <RiMapPinLine
                    size={15}
                    color="#1a1a1aa8" // set custom `width` and `height`
                  />
                  <h4>{item.internshiptype}</h4>
                </div>
                <div className="map">
                  <RiWallet3Line
                    size={15}
                    color="#1a1a1aa8" // set custom `width` and `height`
                  />
                  {item.stipend && (
                    <>
                      <h4>{item.stipend.amount}</h4>
                    </>
                  )}
                </div>
                <div className="map">
                  <RiCalendarLine
                    size={15}
                    color="#1a1a1aa8"
                  />
                  <h4>{item.duration}</h4>
                </div>
                <div className="view">
                  <button className="font-bold">Internship</button>
                  <h3>
                    <Link to={`/internship/detail/${item._id}`}>
                      View Details
                    </Link>
                    <RiArrowRightSLine />
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

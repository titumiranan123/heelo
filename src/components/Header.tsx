/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import img from "./../assets/header1.png"
import logo from "../assets/log.png"
import ReactPlayer from "react-player";
import Headerpulse from './Headerpuls';
import shadow from "./../assets/shadow.png"
import { Link, useLocation } from 'react-router-dom';
const Header: React.FC = () => {
    const [isImageVisible, setIsImageVisible] = useState(true);
    const handleHideImage = (hide: any) => {
        setIsImageVisible(!hide);
    };
    const location = useLocation()
    return (
      <div className="mx-auto lg:px-0 px-4  max-w-[1240px] relative">
        <div className="flex justify-between items-center gap-10 max-w-[1240px] mx-auto mt-10">
          <Link to={"/"}>
            <img
              className="md:w-[151px]   md:h-[60px] w-[120px]"
              src={logo}
              alt=""
            />
          </Link>
          {location.pathname === "/" && (
            <div>
              <Link
                to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
                target="_blank"
                className="md:py-4 md:px-6 border md:w-[161px] w-[120px] text-[14px] md:h-[67px] h-[50px]  rounded-[16px] flex justify-center items-center opensans font-[400] text-white md:text-[20px]"
              >
                Book a Call
              </Link>
            </div>
          )}
        </div>
        <div className=" mx-auto  max-w-[1240px] flex justify-center items-center flex-col z-20">
          <div className="relative mt-[120px] md:mt-[174px]">
            <div className="flex justify-center flex-col items-center z-20">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold lg:text-[96px] md:text-[64px] text-[32px] leading-[35px]  flex justify-center items-center lg:leading-[96px] md:leading-[64px] text-center lg:w-[1153px] ">
                GET YOUR FIRST SHORTS VIDEO FREE
              </h1>
              <p className="opensans mt-[34px] font-[600] text-[14px] leading-[16px] md:text-[16px] lg:text-[20px] text-[#D9D9D9] md:leading-[25.6px] px-2">
                There are numbers of video editing agencies out there but we
                stand out for a reason.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mt-[59px]">
                <Link
                  to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
                  target="_blank"
                  className="py-4 px-6 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center opensans font-[700] md:text-[20px] text-[#03070D] shadow text-[12px]"
                >
                  Book a Call
                </Link>
                <Link
                  to={"https://montagemotion.com/work/video-editing"}
                  target="_blank"
                  className="py-4 px-6 border  rounded-[16px] flex justify-center items-center opensans font-[700] text-[12px] text-white md:text-[20px]"
                >
                  See Our Works
                </Link>
              </div>
            </div>
          </div>
          <div className="md:mt-[102px] mt-[80px] ">
            <div className=" rounded-xl overflow-hidden   lg:scale-100 scale-95   z-40 bg-black lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px] mx-auto  relative ">
              {isImageVisible && (
                <>
                  <img src={img} className="lg:w-[993px] lg:h-[562px]" />
                  <div className="absolute  lg:top-[38%] md:top-[30%] top-[35%] md:h-[80px] md:w-[80px] h-[40px] w-[40px] img-fluid md:left-[39%] lg:left-[46%] left-[44%]">
                    <Headerpulse onHideImage={handleHideImage} />
                  </div>
                </>
              )}

              {!isImageVisible && (
                <div className=" lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px] flex justify-center items-center mx-auto  ">
                  <ReactPlayer
                    url={"https://youtu.be/juKx9Ycp1rM?si=2_3PlduV8g605F7a"}
                    playing
                    height={"100%"}
                    width={"100%"}
                    controls
                    className=" lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 lg:left-0 -left-1 -z-10"
          src={shadow}
          alt=""
        />
        <div className="line"></div>
      </div>
    );
};

export default Header;
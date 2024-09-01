import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/log.png";
const Main: React.FC = () => {
  const location = useLocation();
  return (
    <div>
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
      <Outlet />
      <div className="poppins max-w-[1240px] px-4 mx-auto text-white flex justify-center  lg:justify-between lg:flex-nowrap flex-wrap items-center md:text-[18px] gap-2 pb-4 leading-[25.6px] text-center text-[14px] mt-[120px]">
        <div className="flex gap-4 lg:flex-nowrap flex-wrap">
          <Link className="hover:underline" to={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <Link className="hover:underline" to={"/terms-and-conditions"}>
            Terms & Conditions
          </Link>

          <Link className="hover:underline" to={"/refund-policy"}>
            Refund Policy
          </Link>
        </div>
        <p>&copy; 2024 Motion Montage. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Main;

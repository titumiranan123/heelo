import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div>
      <Outlet />
      <div className="normal max-w-[1240px] px-4 mx-auto text-white flex justify-center  lg:justify-between lg:flex-nowrap flex-wrap items-center md:text-[18px] gap-2 pb-4 leading-[25.6px] text-center text-[14px] mt-[120px]">
        <div className="flex gap-4 lg:flex-nowrap flex-wrap">
          <Link
            className="hover:underline"
            to={"https://montagemotion.com/privacy-policy"}
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:underline"
            to={"https://montagemotion.com/terms-and-conditions"}
          >
            Terms & Conditions
          </Link>

          <Link
            className="hover:underline"
            to={"https://montagemotion.com/refund-policy"}
          >
            Refund Policy
          </Link>
        </div>
        <p>&copy; 2024 Motion Montage. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Main;

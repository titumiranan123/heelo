import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <div className="max-w-[1240px] lg:px-0 px-4 mx-auto mt-20 pb-4 rounded-[10px] ">
        <div className="bg-[#0E141E] px-5 md:px-8 md:py-10 lg:px-[72px] rounded-[10px] flex justify-between items-center py-5  lg:w-[1200px] lg:h-[244px] lg:flex-nowrap flex-wrap md:gap-10 lg:gap-6 gap-6 ">
          <div className="flex flex-col lg:gap-4 gap-4">
            <h1 className="poppins font-bold text-[26px]  leading-[28px] md:text-[48px] md:leading-[50px] text-white">
              Have a shorts to edit ?
            </h1>
            <p className="normal md:text-[20px] md:leading-[25.6px] text-[14px] leading-[16px] md:mt-0 mt-1 text-white">
              We minimize your workload by editing your short-form video for
              yourself so <br className="lg:block hidden" /> that you can focus
              on your other works .
            </p>
          </div>
          <div>
            <Link
              to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
              target="_blank"
              className="bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] normal"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="normal text-white flex justify-between items-center md:text-[18px] leading-[25.6px] text-center text-[14px] mt-[120px]">
          <div className="flex gap-4">
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
            {/* <Link className="hover:underline" to={"pricing-plans"}> */}
            {/* <Link className="hover:underline" to={"/"}>
              Pricing Plan
            </Link> */}
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

export default Footer;
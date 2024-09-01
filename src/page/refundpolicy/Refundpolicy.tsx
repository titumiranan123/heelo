import React, { useEffect } from "react";


const Refundpolicy:React.FC = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="max-w-[1240px] mx-auto px-2">
        <h1 className="mb-[60px] mt-[120px] text-center text-[36px] text-white poppins  font-bold">
          Refund Policy
        </h1>
        <div className="opensans text-[#E4E8F7]">
          <div className="font-[400]  md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
            <p>Effective Date: 26 August, 2024</p>
            <p className="mt-4">
              At Montage Motion, we aim to deliver high-quality video editing
              services. However, if you&apos;re not satisfied with our services,
              here&apos;s how our refund policy works:
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div>
              <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  poppins">
                1. Eligibility for Refunds
              </h1>
              <ul className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] list-disc opensans ms-6">
                <li>
                  Request: Refund requests must be made within 3 days of the
                  final product delivery.
                </li>
                <li>
                  Conditions: Refunds are only available if the service was not
                  delivered as agreed or does not meet the project
                  specifications.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  poppins">
                2. Non-Refundable Services
              </h1>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
                {" "}
                Non-Refundable:Consultation fees, rush fees, and fully completed
                work are non-refundable.
              </p>
            </div>
            <div>
              <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  poppins">
                3. Partial Refunds
              </h1>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
                Partial Deliveries: If a project is only partially completed, a
                partial refund may be issued based on the work completed.
              </p>
            </div>
            <div>
              <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  poppins">
                4. Refund Process
              </h1>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
                Review: We will review your refund request and notify you of our
                decision within 7 business days.
              </p>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
                Issuance: Approved refunds will be processed to the original
                payment method.
              </p>
            </div>
            <div>
              <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  poppins">
                5. Contact Us
              </h1>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans">
                For refund requests or questions, contact us at:
              </p>
              <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] opensans mt-2">
                Montage Motion <br />
                Email: imonofficial@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Refundpolicy;
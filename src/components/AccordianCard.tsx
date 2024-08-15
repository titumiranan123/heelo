import { useState, FC } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionCardProps {
    title: string;
    description: string;
}

const AccordionCard: FC<AccordionCardProps> = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleAccordion = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className={`lg:w-[692px] ${isVisible ? "lg:h-auto h-auto" : "lg:h-[70px] h-[98px]"} 
      mt-4 relative transition-all duration-300 ease-in-out`}
        >
            <div
                className={`serviceCard rounded-lg p-6 text-[#E4E8F7] lg:w-[692px] ${isVisible ? "bg-[#222A2D]" : ""} 
        z-10`}
            >
                <button
                    onClick={toggleAccordion}
                    className="flex justify-between w-full "
                >
                    <span className="tracking-[1.5px] semibold md:w-[564px] md:text-[24px] text-left leading-[20px] md:leading-[28px] text-[16px]">
                        {title}
                    </span>
                    <div className="w-10 relative">
                        <FaPlus
                            className={`w-6 h-6 transform transition-transform duration-300 ${isVisible ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
                        />
                        <FaMinus
                            className={`w-6 h-6 top-0 absolute transform transition-transform duration-300 ${isVisible ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`}
                        />
                    </div>
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-50 text-lg ${isVisible ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="font-light mt-2 md:w-[564px] md:text-[16px] lg:leading-[20px] leading-[18px] regular text-[14px]">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionCard;

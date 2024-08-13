import CountUp from "react-countup";

const State = () => {
    return (
        <div className="bg mt-[68px]  rounded-[10px] md:h-[200px] md:mt-[80px] lg:mt-[90px] max-w-[1240px] mx-auto">
            <div className="grid lg:w-[1200px] grid-cols-1 md:grid-cols-3 gap-10 p-12">
                <div className="flex justify-center flex-col items-center">
                    <p className="text-[42px] font-bold leading-[52px] text-[#03070D] bold tracking-[0.8px]">
                        <CountUp enableScrollSpy={true} start={1} duration={4} end={1000} />
                        +
                    </p>
                    <p className="text-[24px] text-[#03070D] text-center regular">
                        Succesfull Projects
                    </p>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-[42px] bold tracking-[0.8px] font-bold leading-[52px] text-[#03070D]">
                        <CountUp enableScrollSpy={true} start={1} duration={4} end={7} />+
                    </p>
                    <p className="text-[24px] text-[#03070D] text-center regular">
                        Year of Experience{" "}
                    </p>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-[42px] font-bold leading-[52px] text-[#03070D]  bold tracking-[0.9px]">
                        <CountUp enableScrollSpy={true} start={1} duration={4} end={12} />+
                    </p>
                    <p className="text-[24px] text-[#03070D]  text-center regular">
                        Team Members
                    </p>
                </div>
            </div>
        </div>
    );
};

export default State;

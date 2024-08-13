import React from 'react';
import ReactPlayer from 'react-player';

const Successstroy: React.FC = () => {
    return (
        <div className='max-w-[1240px] lg:mt-0 md:mt-20  lg:px-0 mx-auto px-4 mb-5 '>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-white bold lg:text-[56px] md:text-[56px] text-[28px] md:w-[511px] flex justify-center items-center md:leading-[64px] text-center leading-[32px]'>OUR SUCCESS  STORY</h1>
                <p className='regular mt-[16px] font-[600] md:text-[20px] text-[14px] leading-[16px] text-[#D9D9D9] md:md:leading-[25.6px] '>There are numbers of video editing agencies out there but we stand out for a reason. </p>
            </div>
            <div className='mt-20 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-10'>
                <div className='md:w-[386px] h-[784px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]'>
                    <div className='md:w-[334px] w-full bg-[#D9D9D9] rounded-[12px] h-[594px]'>
                        <ReactPlayer
                            url={`https://youtu.be/-T_n7XNxmfk?si=Mqtd7LzyePqf9ZsM`}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className='flex gap-5 items-center mt-10'>
                        <div>
                            <img src="" className='bg-white md:w-20 md:h-20 w-14 h-14 rounded-full' alt="" />
                        </div>
                        <div >
                            <h1 className='semibold md:text-[24px] text-[20px] text-[#D9D9D9]'>John Doe</h1>
                            <p className='regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]'>Founder or Lroem </p>
                        </div>
                    </div>

                </div>
                <div className='md:w-[386px] h-[784px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]'>
                    <div className='md:w-[334px] w-full bg-[#D9D9D9] rounded-[12px] h-[594px]'>

                        <ReactPlayer
                            url={`https://youtu.be/-T_n7XNxmfk?si=Mqtd7LzyePqf9ZsM`}
                            controls
                            width="100%"
                            height="100%"
                        />

                    </div>
                    <div className='flex gap-5 items-center mt-10'>
                        <div>
                            <img src="" className='bg-white md:w-20 md:h-20 w-14 h-14 rounded-full ' alt="" />
                        </div>
                        <div >
                            <h1 className='semibold md:text-[24px] text-[20px] text-[#D9D9D9]'>John Doe</h1>
                            <p className='regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]'>Founder or Lroem </p>
                        </div>
                    </div>

                </div>
                <div className='md:w-[386px] h-[784px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]'>
                    <div className='md:w-[334px] w-full bg-[#D9D9D9] rounded-[12px] h-[594px]'>
                        <ReactPlayer
                            url={`https://youtu.be/-T_n7XNxmfk?si=Mqtd7LzyePqf9ZsM`}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className='flex gap-5 items-center mt-10'>
                        <div>
                            <img src="" className='bg-white md:w-20 md:h-20 w-14 h-14 rounded-full' alt="" />
                        </div>
                        <div >
                            <h1 className='semibold md:text-[24px] text-[20px] text-[#D9D9D9]'>John Doe</h1>
                            <p className='regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]'>Founder or Lroem </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Successstroy;
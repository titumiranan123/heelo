import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='max-w-[1240px] lg:px-0  mx-auto mt-10 pb-4 rounded-[10px] '>
            <div className='bg-[#0E141E] px-5 md:px-8 md:py-10 lg:px-[72px] rounded-[10px] flex justify-between items-center py-5  lg:w-[1200px] lg:h-[244px] lg:flex-nowrap flex-wrap md:gap-10 lg:gap-6 gap-6 '>
                <div className='flex flex-col lg:gap-4 gap-4'>
                    <h1 className='bold text-[26px]  leading-[28px] md:text-[48px] md:leading-[50px] text-white'>Have a podcast to edit ?</h1>
                    <p className='normal md:text-[20px] md:leading-[25.6px] text-[14px] leading-[16px] md:mt-0 mt-1 text-white'>We minimize your workload by editing your podcast for yourself so <br className='lg:block hidden' /> that you can focus on your other works .</p>
                </div>
                <div>
                    <button className='bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] normal'>Get Started</button>
                </div>
            </div>
            <div className='normal text-white flex justify-center items-center md:text-[20px] leading-[25.6px] text-center text-[14px] mt-[120px]'>
                <p>&copy;  2024 Motion Montage. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
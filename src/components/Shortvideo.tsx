import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Headerpulse from './Headerpuls';
import ReactPlayer from 'react-player';
import img from './../assets/shorts.png'

const videoData = [
    {
        id: 1,
        thumbnail: img,
        videoUrl: 'https://youtu.be/JLiB1fOLeNc',
    },
    {
        id: 2,
        thumbnail: img,
        videoUrl: 'https://youtu.be/o_EKd07ramE',
    },
    {
        id: 3,
        thumbnail: img,
        videoUrl: 'https://youtube.com/shorts/NWugQsITE_c?feature=share',
    },
    {
        id: 4,
        thumbnail: img,
        videoUrl: 'https://youtube.com/shorts/1bJwNnW9h3w?feature=share',
    },
    {
        id: 5,
        thumbnail: img,
        videoUrl: 'https://youtu.be/o_EKd07ramE',
    },
];

const Shortvideo: React.FC = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleHideImage = (hide: boolean) => {
        setIsImageVisible(!hide);
    };

    return (
        <div className='flex lg:flex-nowrap flex-wrap justify-between max-w-[1240px] gap-[110px] overflow-hidden mx-auto px-4 lg:mt-0 md:mt-32 mt-16'>
            <div className=' lg:w-1/2 w-full flex justify-start flex-col'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold md:text-[64px] text-left md:leading-[64px] leading-[32px] text-[28px] w-full'>
                    OUR RECENT PROJECT
                </h1>
                <p className='opensans mt-[14px] md:mt-[34px] font-[600] md:text-[20px] text-[#D9D9D9] md:w-[505px] md:leading-[25.6px] leading-[18px] text-[14px]'>
                    Montage motion is the reliable digital solutions provider to grow your business 3x faster. We provide services on Video Editing and special service on Podcast.
                </p>
                <button className='py-4 mt-[30px] md:mt-[52px] md:px-6 px-4 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center opensans font-[700] md:text-[20px] text-[14px] text-[#03070D] md:w-[280px] w-[200px] shadow'>
                    Get Your Shorts Edited
                </button>
            </div>
            <div className='lg:w-1/2 w-full'>
                <div className='md:w-[400px]  mx-auto w-[300px] relative'>
                    <SwiperComponent
                        direction="vertical"
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{ clickable: true }}
                        mousewheel={{ forceToAxis: true }}
                        modules={[Navigation, Mousewheel]}
                        style={{ width: '487px', height: '6700.23px' }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {videoData.map((video, index) => (
                            <SwiperSlide key={video.id}>
                                <div className="slide-content">
                                    {
                                        !isImageVisible &&
                                        <div onClick={() => setIsImageVisible(!isImageVisible)}>
                                            <img className='md:w-[387px] md:h-[680.23px] h-[684px]' src={video.thumbnail} alt={`Slide ${index + 1}`} />
                                            <div className="absolute lg:top-[48.5%] md:top-[30%] md:h-[20px] md:w-[20px] h-[20px] w-[20px] img-fluid md:left-[39%] lg:left-[38.4%] top-[47.2%] left-[46.2%]">
                                                <Headerpulse onHideImage={handleHideImage} />
                                            </div>
                                        </div>
                                    }
                                    {
                                        isImageVisible &&
                                        <div className="md:w-[387px] md:h-[680.23px] h-[684px]">
                                            <ReactPlayer
                                                url={video.videoUrl}
                                                playing={activeIndex === index}
                                                height={"100%"}
                                                width={"100%"}
                                                controls
                                            />
                                        </div>
                                    }
                                </div>
                            </SwiperSlide>
                        ))}
                    </SwiperComponent>
                    <div className="swiper-button-prev-custom absolute top-[45%] left-0 transform -translate-y-1/2 z-10">
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next-custom absolute top-[55%] -right-2 transform -translate-y-1/2 z-10">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shortvideo;

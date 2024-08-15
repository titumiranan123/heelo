import React from 'react';

import Pricing from '../components/Pricing';
import Accordion from '../components/Accordion';
// import Successstroy from '../components/Successstroy';
import Bestoption from '../components/Bestoption';
import Header from '../components/Header';
import State from '../components/State';
import Shortvideo from '../components/Shortvideo';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className='flex  flex-col lg:gap-[120px]   gap-[0px]'>
            <Header />
            <span className='lg:w-[1440px] w-full opacity-20 mx-auto h-[1px] bg-[#effe] lg:mt-[60px] md:mt-[80px] mt-[40px]'></span>
            <Shortvideo />
            <State />
            <Bestoption />
            {/* <Successstroy /> */}
            <Accordion />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;
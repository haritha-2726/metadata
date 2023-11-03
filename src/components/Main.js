import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from "react-router-dom" 
 
 
 

const Main = () => {
    
  const handleClickScroll = (offset) => {
  const element = document.getElementById('section-2');
  if (element) {
    const options = {
      behavior: 'smooth'
    };

    if (offset) {
      options.top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    }

    element.scrollIntoView(options);
  }
};

  return (
    <div className='flex items-center justify-center  pt-[60px]'    >
       
    <div className='p-8 text-center flex flex-col items-center'>
     
    <h1 className='text-[40px] text-white md:w-[600px] font-semibold pb-3 font-houschka-medium relative  ' style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
       MDIS
      <div className='w-16 h-1 bg-orange-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 ' ></div>
    </h1>
        
      <h1 className='text-[25px] text-white md:w-[600px] font-semibold pb-3 font-houschka-medium pt-6    '  style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>Without change there is no innovation, creativity, or incentive for improvement. We initiate that change, that will create a better opportunity to manage the change that is inevitable.</h1>
      <p className='md:w-[650px] text-[22px] text-white pb-6 backdrop-blur-sm  ' >We Take bold steps to define the future. We work with ambitious clients who want to define the future, innovate the future, adapt to the future and not hide from it.
</p>
 
 
      <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded flex items-center ' onClick={handleClickScroll}>
        <Link  className=" " to="/aboutus">Learn More</Link>
        <span className='pl-2'><AiOutlineArrowRight/></span>
      </button>
    </div>
  </div>
  

  );
};

export default Main;

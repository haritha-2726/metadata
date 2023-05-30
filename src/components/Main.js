import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <div className='p-8'>
      <h1 className='text-xl md:w-[600px] font-semibold pb-3 font-houschka-medium'>Guiding people in developing effective job search strategies and building a professional network to tap into hidden opportunities</h1>
      <p className='md:w-[650px]'>We are a US-based staffing service that specializes in providing comprehensive recruitment solutions for organizations of all sizes. At our consultancy, we partner with a diverse range of organizations, serving as their trusted recruitment partner to fulfill their hiring needs effectively. With our extensive candidate database and proven recruitment methodologies, we support organizations in building robust teams that fuel innovation and drive business results.</p>
      <button className='bg-sky-700 text-white font-bold py-2 px-4 rounded flex items-center'> <Link to="/aboutus"> Read More</Link><span className='pl-2'><AiOutlineArrowRight/></span></button>
    </div>
  );
};

export default Main;

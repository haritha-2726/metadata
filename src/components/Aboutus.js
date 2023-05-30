import Location from "./Location";
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className='back2'>
        <div className='flex flex-col p-6 md:p-36'>
          <h1 className='text-white font-thin text-2xl md:text-5xl'>About MIS</h1>
          <p className='text-white font-serif text-2xl md:text-5xl'>IT Recruitment Specialist - Passion and Expertise</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='p-6 md:p-25 w-full md:w-1/2'>
          <h1 className='text-2xl md:text-4xl font-bold'>Who We Are</h1>
          <p className='pt-3 md:pt-5'>We are IT Recruitment Specialists driven by our passion and expertise in connecting exceptional talent with outstanding opportunities. We take great pride in our role as a trusted partner for both job seekers and employers in the IT industry.</p>
          <p className='pt-3 md:pt-5'>As a US-based IT consultancy, we have a comprehensive network of industry contacts and a vast pool of qualified candidates. Leveraging our extensive knowledge and experience, we streamline the recruitment process, ensuring that our clients have access to the best IT talent available. Whether it's a permanent position, contract role, or project-based assignment, we have the expertise to identify the right candidates for every requirement.</p>
          <p className='pt-3 md:pt-5'>Our approach is rooted in building long-term relationships with both clients and candidates. We take the time to understand the unique needs and aspirations of individuals and businesses, enabling us to make meaningful connections that drive success. Our team of dedicated professionals is committed to providing exceptional service, maintaining open lines of communication, and delivering results that exceed expectations.</p>
          <div className='pt-3 md:pt-5'>
            <p>We invest in the professional development of our candidates, providing them with guidance, resources, and training opportunities. This commitment to candidate development ensures that we present highly skilled and motivated individuals who are ready to make an immediate impact in your organization.</p>
          </div>
        </div>

        <div className='flex justify-center items-center w-full md:w-1/2'>
          <div className='w-3/4 md:w-1/2'>
            <Location />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

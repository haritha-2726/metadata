import React from 'react';
import Form from './Form';
import Address from './Address';

const Contactus = () => {
  return (
    <div  id="section-4" className="     flex justify-center items-center h-screen">
      <div className="p-5">
        <h1    className=" font-thin text-2xl md:text-5xl text-center p-4 pb-7" style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center pt-7 justify-center"> {/* Center content and form */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
            <p className="text-2xl font-bold mb-4">How Can We Help You?</p>
            <p className="text-gray-600 text-xl">Our team loves to solve your challenges and would be delighted to chat with you about your project and opportunities.</p>
          </div>
                 <div class="w-full md:w-1/2 lg:w-[35%] p-4 bg-white rounded-lg shadow-xl mt-4 md:mt-0">
                              <Form />
                   </div>

        </div>
        <Address />
      </div>
    </div>
  );
};

export default Contactus;

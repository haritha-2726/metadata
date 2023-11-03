import React from 'react';

const Whoweare = () => {
  return (
    <div  id="section-5"  className="bg-gray-100 p-8   text-gray-700 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to Metadata Integrated Solutions</h1>
        <p className="text-lg mb-10">
          Welcome to Metadata Integrated Solutions, your gateway to the future of IT excellence. As an IT consulting services powerhouse, we are committed to delivering innovation, technology expertise, and exceptional solutions that drive your business forward. Our mission is to connect you with the best IT talent, provide comprehensive project solutions, and foster client success in the fast-evolving world of technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision Statement</h2>
            <p className="text-gray-700">
              <span className='font-medium'>Embracing Technological Transformation:</span> To be a leading force in the IT consulting industry, pioneering technological transformation and innovation, and empowering businesses to thrive in the digital era.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission Statement</h2>
            <p className="text-gray-700">
              <span className='font-medium'>Empowering Your Tech Journey:</span> Our mission is to empower your tech journey through superior IT staffing, collaborative client relationships, and unmatched project solutions, making your success our ultimate goal.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md mt-8 " >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Values</h2>
          <ul className="text-gray-700 space-y-4">
            <li><span className='font-medium'>Integrity:</span> We maintain the highest integrity standards, with honesty and ethical conduct at our core.</li>
            <li><span className='font-medium'>Client-Centric Approach:</span> We focus on understanding our clients' unique needs, prioritizing their success.</li>
            <li><span className='font-medium'>Innovation:</span> We prioritize innovation as the force driving our solutions, constantly seeking improved results.</li>
            <li><span className='font-medium'>Collaboration:</span> We value collaboration with our team, clients, and partners as the path to excellence.</li>
            <li><span className='font-medium'>Dedication to Excellence:</span> We are dedicated to delivering nothing less than excellence, ensuring that our clients receive top-tier IT services and solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;

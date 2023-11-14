import React from 'react';

const Whoweare = () => {
  return (
    <div  id="section-5"  className="bg-gray-100 p-8   text-gray-700 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 pt-6"> Who We Are</h1>
         

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision Statement</h2>
            <p className="text-gray-700  ">
              <span className='font-medium   text-gray-950'>Embracing Technological Transformation:</span> To be a leading force in the IT consulting industry, pioneering technological transformation and innovation, and empowering businesses to thrive in the digital era.
            </p>
            <p className="text-gray-700">
              <span className='font-medium  text-gray-950'>Shaping a Brighter Digital Tomorrow:</span> Our vision is to shape a brighter digital tomorrow by continually pushing the boundaries of what's possible in the IT realm, enabling businesses to achieve unprecedented success.
            </p>
            <p className="text-gray-700">
              <span className='font-medium  text-gray-950'>A World Transformed Through Technology:</span> We envision a world transformed through technology, where our expertise and dedication to excellence create a future where every business achieves its full digital potential.
            </p>
             
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission Statement</h2>
            <p className="text-gray-700">
                <span className='font-medium'>Empowering Your Tech Journey:</span> Our mission is to empower your tech journey through superior IT staffing, collaborative client relationships, and unmatched project solutions, making your success our ultimate goal.</p>
              <p className="text-gray-700"> <span className='font-medium'>Unleashing Innovation:</span> We are on a mission to unleash innovation within our clients' organizations by providing them with the best IT talent, offering tailored solutions, and fostering a culture of constant improvement.</p>

             <p className="text-gray-700">  <span className='font-medium'>Delivering Excellence:</span> At Metadata Integrated Solutions, our mission is to deliver excellence, consistently exceeding expectations in every aspect of IT consulting, from staffing to project execution.</p>

            

          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md mt-8 " >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Values</h2>
          <ul className="text-gray-700 space-y-4">
            <li><span className='font-medium'>Integrity:</span> We maintain the highest integrity standards, with honesty and ethical conduct at our core.</li>
            <li><span className='font-medium'>Client-Centric Approach:</span> We focus on understanding our clients' unique needs, prioritizing their success.</li>
            <li><span className='font-medium'>Innovation:</span> We prioritize innovation as the force driving our solutions, constantly seeking improved results.</li>
            <li><span className='font-medium'>Collaboration:</span> We value collaboration with our team, clients, and partners as the path to excellence.</li>
            <li><span className='font-medium'>Dedication to Excellence:</span> We are dedicated to delivering nothing less than excellence, ensuring that our clients receive top-tier IT services and solutions.</li>
            <li><span className='font-medium'>Continuous Improvement:</span> We foster a culture of constant improvement, where we learn from every experience to enhance our services and offerings.</li>
            <li><span className='font-medium'>Adaptability: </span> We thrive in the ever-evolving IT landscape by staying adaptable, embracing change, and helping our clients do the same.</li>
            <li><span className='font-medium'>Community Involvement: </span> We actively participate in community initiatives and philanthropic endeavors, demonstrating our commitment to social responsibility.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;

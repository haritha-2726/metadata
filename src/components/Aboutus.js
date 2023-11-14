import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div id="section-2" className="flex items-center justify-center pt-[120px] pb-6">
        <div className="w-full md:w-1/2 text-center">
          <div
            style={{
              boxShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
            }}
          >
            <h1 className="text-2xl md:text-3xl font-semibold pb-3 font-houschka-medium relative">
              Welcome to  Metadata Integrated Solutions
              <div className="w-20 h-1 bg-orange-500 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </h1>

            <p className="text-base md:text-lg pt-5 pb-6 mx-auto text-left">
              We're your partner for all your IT needs, from helping you choose the right technology to implementing and managing complex systems. We'll work with you to understand your challenges and develop custom solutions that meet your specific needs. We believe that technology should be a force for good in the world. That's why we're passionate about helping businesses use IT to overcome their challenges and achieve their goals. Our team of experts has the knowledge and experience to help you succeed in any industry. We don't just provide IT services. We build relationships with our clients and become trusted partners. We'll work with you to understand your business goals and develop IT solutions that help you achieve them. We believe that the best solutions are developed through collaboration. That's why we work closely with our clients and partners to understand their needs and develop solutions that meet everyone's goals.
            </p>
            <div className="w-full border-t border-gray-400 mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

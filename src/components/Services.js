import React from 'react';

const Services = () => {
  return (
    <div className=' pt-[60px]'>
      <div id="section-3" className="flex items-center justify-center pt-[60px] md:pt-10 pb-6">
        <h1 className="font-thin text-2xl md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
          Our Services
        </h1>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">Consulting</h1>
            <p className="pt-4 text-base md:text-lg">
              At Metadata Integrated Solutions, we excel in delivering unparalleled customer service through our tailored package offerings for open roles. Our extensive range of research and assistance packages are designed to cater to the unique requirements of each client. By leveraging the expertise of our dedicated personnel team, we ensure a seamless and efficient process for our clients. We have in-depth knowledge of the varying pay scales, perks, and experience levels within different sectors and job roles, enabling us to provide personalized and impactful solutions. Our unwavering commitment to exceptional customer service sets us apart from other firms in the job hunting industry.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">Services</h1>
            <p className="pt-4 text-base md:text-lg">
              At Metadata Integrated Solutions, we understand the value of our clients' time, which is why we take the responsibility of conducting time-consuming background checks off their hands. As a part of our commitment to delivering exceptional experiences and building long-lasting relationships, we offer comprehensive background checks as an integral part of every contract. In response to the specific requirements of our clients, we provide an array of services. We understand that achieving profitability is crucial, and we acknowledge that delivering exceptional collaboration and support to our clients is the most effective approach to foster.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">Staffing</h1>
            <p className="pt-4 text-base md:text-lg">
              Metadata Integrated Solutions understands the demand for sponsoring exceptional individuals from around the world. To cater to this need, we have strategically combined our team's extensive knowledge of immigration law with trusted immigration attorneys, offering a specialized immigration assistance service. Our dedicated immigration professional teams work diligently to recruit and facilitate the immigration process for applicants hailing from diverse nations, without any additional charges to the client. We specialize in expediting the visa procedures for Visas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

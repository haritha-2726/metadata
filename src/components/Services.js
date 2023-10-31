import React from 'react';

const Services = () => {
  return (
    <div id="section-3" className=' pt-[120px]'>
      <div   className="   flex items-center justify-center pt-[60px] md:pt-10 pb-6">
        <h1 className="font-thin text-2xl md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
          Our Services
        </h1>
      </div>

      <div className=" flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">IT Staffing Solutions</h1>
            <p className="pt-4 text-base md:text-lg"> <span className=' font-semibold'>  IT Talent Sourcing:  </span>We specialize in sourcing top-tier IT talent to meet your specific needs. We have an extensive network to find the right fit for your organization. </p>
            <p  className='pt-1 text-base md:text-lg'> <span className=' font-semibold'> Permanent and Temporary Staffing:</span> We offer both permanent and temporary staffing solutions. Whether you need long-term team members or short-term experts for project-based work, we can match you with the best candidates.</p>
            <p className='pt-1 text-base md:text-lg '>
            <span className=' font-semibold'> Skillset Assessment: </span>Our skill set assessment process ensures that the professionals we recommend have the right qualifications, experience, and technical skills to excel in your organization.
            </p>
            <p className='pt-1 text-base md:text-lg'>  <span className=' font-semibold pr-1 '> Onboarding and Training: </span>   We go beyond recruitment; our services include onboarding and training assistance for new hires. We help your team members integrate seamlessly into your organization and provide training as needed to ensure their success. </p>
           
          </div>
           <div className='service-box'></div>
        </div>
        

        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">Project Consulting:</h1>
            <p className="pt-4 text-base md:text-lg"> <span className=' font-semibold'>  Project Planning and Strategy  </span>We work with you to plan and strategize IT projects, aligning them with your business goals. Our experts can help you define project scopes,  and deliverables.
 </p>
            <p  className='pt-1 text-base md:text-lg'> <span className=' font-semibold'>Technology Assessment</span> We offer both permanent and temporary staffing solutions. Whether you need long-term team members or short-term experts for project-based work.</p>
            <p className='pt-1 text-base md:text-lg '>
            <span className=' font-semibold'> Custom Solution Development: </span>We create customized IT solutions tailored to your specific needs. From software development to system integration, we design and develop solutions that address your unique challenges.
            </p>
            <p className='pt-1 text-base md:text-lg'>  <span className=' font-semibold pr-1 '> Project Management </span> Our experienced project managers oversee the entire project lifecycle. They ensure that projects stay on schedule, within budget, and meet the quality and performance standards you expect. </p>
          </div>
          <div className='service-box'></div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="border p-4 rounded-lg shadow-md border-hover">
          <h1 className="font-bold text-xl md:text-2xl text-center">Client Collaboration</h1>
            <p className="pt-4 text-base md:text-lg"> <span className=' font-semibold'>  Requirements Analysis: </span>We begin every collaboration by thoroughly analyzing your business requirements. This in-depth understanding forms the foundation of our solution design.
 </p>
            <p  className='pt-1 text-base md:text-lg'> <span className=' font-semibold'> Tailored Solutions:</span>We don't believe in one-size-fits-all solutions. Our commitment is to create tailored solutions that precisely meet your unique needs and challenges.</p>
            <p className='pt-1 text-base md:text-lg '>
            <span className=' font-semibold'> Ongoing Support and Maintenance: </span> Our client collaboration extends beyond project completion. We provide ongoing support and maintenance services to ensure your IT solutions remain reliable and up-to-date.
            </p>
            <p className='pt-1 text-base md:text-lg'>  <span className=' font-semibold pr-1 '>Project Evaluation and Enhancement: </span>  We continuously evaluate the performance of completed projects and seek opportunities for enhancement. We're dedicated to maximizing the value and impact of our solutions for your business. </p>
          </div>
          <div className='service-box'></div>
        </div>
        <div className="w-full md:w-1/3 p-4  ">
          {/* Empty column for centering */}
        </div>
        <div className="w-full md:w-1/3 p-4  ">
          <div className="border p-4 rounded-lg shadow-md border-hover">
            <h1 className="font-bold text-xl md:text-2xl text-center">Why Choose Us:</h1>
            <p className="pt-4 text-base md:text-lg"> <span className=' font-semibold'>  Expertise and Experience:  </span> With years of experience and a team of skilled professionals, we bring expertise to every project. Our track record of successful projects speaks for itself.
 </p>
            <p  className='pt-1 text-base md:text-lg'> <span className=' font-semibold'>Client-Centric Approach:</span> We place our clients at the center of our operations. Your goals and satisfaction are our top priorities, and we work closely with you to achieve them.
</p>
            <p className='pt-1 text-base md:text-lg '>
            <span className=' font-semibold'> Customized Solutions: </span>  We understand that no two businesses are the same. That's why we create tailored solutions to address your specific challenges, ensuring you receive the maximum benefit from our services.
            </p>
            <p className='pt-1 text-base md:text-lg'>  <span className=' font-semibold pr-1 '> Quality Assurance: </span>   Our stringent quality control and assurance processes guarantee that you receive the highest standard of service and the best results. </p>
          </div>
          <div className='service-box'></div>
        </div>
      </div>
    </div>
  );
};

export default Services;

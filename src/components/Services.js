import React, { useState } from 'react';
import services1 from "../images/services5.jpeg";
import services2 from "../images/ services2.jpeg";
import services3 from "../images/services3.png";
import services4 from "../images/ services7.png";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const servicesData = [
    {
      title: 'IT Staffing Solutions',
      image: services1,
      details: [
        'IT Talent Sourcing: We specialize in sourcing top-tier IT talent to meet your specific needs. We have an extensive network to find the right fit for your organization.',
        "Permanent and Temporary Staffing: We offer both permanent and temporary staffing solutions. Whether you need long-term team members or short-term experts for project-based work, we can match you with the best candidates.",
        'Skillset Assessment: Our skill set assessment process ensures that the professionals we recommend have the right qualifications, experience, and technical skills to excel in your organization.',
        'Onboarding and Training: We go beyond recruitment; our services include onboarding and training assistance for new hires. We help your team members integrate seamlessly into your organization and provide training as needed to ensure their success.',
      ],
    },
    {
      title: 'Project Consulting',
      image: services2,
      details: [
        'Project Planning and Strategy: We work with you to plan and strategize IT projects, aligning them with your business goals. Our experts can help you define project scopes and deliverables.',
        'Technology Assessment: We offer both permanent and temporary staffing solutions. Whether you need long-term team members or short-term experts for project-based work.',
        'Custom Solution Development: We create customized IT solutions tailored to your specific needs. From software development to system integration, we design and develop solutions that address your unique challenges.',
        'Project Management: Our experienced project managers oversee the entire project lifecycle. They ensure that projects stay on schedule, within budget, and meet the quality and performance standards you expect.',
      ],
    },
    {
      title: 'Client Collaboration',
      image: services3,
      details: [
        'Requirements Analysis: We begin every collaboration by thoroughly analyzing your business requirements. This in-depth understanding forms the foundation of our solution design.',
        "Tailored Solutions: We don't believe in one-size-fits-all solutions. Our commitment is to create tailored solutions that precisely meet your unique needs and challenges.",
        'Ongoing Support and Maintenance: Our client collaboration extends beyond project completion. We provide ongoing support and maintenance services to ensure your IT solutions remain reliable and up-to-date.',
        'Project Evaluation and Enhancement: We continuously evaluate the performance of completed projects and seek opportunities for enhancement. We\'re dedicated to maximizing the value and impact of our solutions for your business.',
      ],
    },
    {
      title: 'Why Choose Us',
      image: services4,
      details: [
        'Expertise and Experience: With years of experience and a team of skilled professionals, we bring expertise to every project. Our track record of successful projects speaks for itself.',
        'Client-Centric Approach: We place our clients at the center of our operations. Your goals and satisfaction are our top priorities, and we work closely with you to achieve them.',
        "Customized Solutions: We understand that no two businesses are the same. That's why we create tailored solutions to address your specific challenges, ensuring you receive the maximum benefit from our services.",
        'Quality Assurance: Our stringent quality control and assurance processes guarantee that you receive the highest standard of service and the best results.',
      ],
    },
  ];

  return (
    <div id="section-3" className="service-container">
      <div className="flex items-center justify-center">
        <h1 className="font-thin text-2xl md:text-5xl pb-3" style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
          Our Services
        </h1>
      </div>
      {servicesData.map((service, index) => (
        <div
          className={`service-box ${hoveredService === index ? 'hovered' : ''}`}
          key={index}
          onMouseEnter={() => setHoveredService(index)}
          onMouseLeave={() => setHoveredService(null)}
        >
          <div className="service-content">
            <div className="service-icon">
              <div className="service-title">
                <h1 className="font-bold text-xl md:text-2xl font-serif">
                  {service.title}
                </h1>
              </div>
              <div className="logo">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
          <div className="service-details">
            {service.details.map((detail, i) => (
              <p className="text-base md:text-lg font-serif text-white" key={i}>
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

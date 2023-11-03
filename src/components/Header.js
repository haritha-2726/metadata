import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import React from 'react';

export const Logo = () => (
  <a href="/" className="">
    <img
      className=""
      alt="logo"
      src={logo}
      style={{ width: 'auto', maxHeight: '100px' }}
    />
  </a>
);

export const Title = () => (
  <a href="/">
    <p className="font-medium font-serif text-[20px] md:text-xl lg:text-xl xl:text-2xl">
      <h1>
        <span className="text-orange-500">Metadata</span>{" "}
        <span style={{ color: '#DB5800' }}>Integrated Solutions</span>
      </h1>
    </p>
  </a>
);

export const HeaderComponent = () => {
  const handleScrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  ;
  
  return (
    <>
      <div className="header flex flex-col md:flex-row items-center justify-between border shadow" style={{ padding: '5px' }}>
        <div className="flex items-center">
          <Logo />
          <Title />
        </div>
        <div className="flex flex-wrap">
          <ul className="flex">
            <li className="px-2 md:px-4 lg:px-6 xl:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-2', 120)}>
              <Link to="/aboutus">About</Link>
            </li>
            <li className="px-2 md:px-4 lg:px-6 xl:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-5',115)}>
              <Link to="/whoweare">Who We Are</Link>
            </li>
            <li className="px-2 md:px-4 lg:px-6 xl:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-3' ,70)}>
              <Link to="/services">Services</Link>
            </li>
            <li className="px-2 md:px-4 lg:px-6 xl:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-4' ,120)}>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

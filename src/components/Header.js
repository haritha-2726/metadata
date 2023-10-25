import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import React  from 'react';

export const Title = () => (
  <a href="/" className=" ">
    <img
      className="h-[160px]"  
      alt="logo"
      src={logo}
      style={{ width: 'auto', maxHeight: '100px' }}  
    />
  </a>
);

export const Titlee = () => (
  <a href="/">
    <p className="font-medium font-serif text-[25px]">
      <span className="text-orange-500">Metadata</span>{" "}
      <span style={{ color: '#DB5800' }}>Integrated Solutions</span>
    </p>
  </a>
);

export const HeaderComponent = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header flex flex-col md:flex-row items-center justify-between border shadow" style={{ padding: '5px' }}>
      <div className="flex items-center">
        <Title />
        <Titlee />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <ul className="flex">
          <li className="px-4 md:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-1')}>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 md:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-2')}>
            <Link to="/aboutus">About</Link>
          </li>
          <li className="px-4 md:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-3')}>
            <Link to="/services">Services</Link>
          </li>
          <li className="px-4 md:px-8 font-semibold text-orange-700 hover:text-red-400" onClick={() => handleScrollToSection('section-4')}>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

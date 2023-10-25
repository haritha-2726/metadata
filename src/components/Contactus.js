import React from 'react';
import { SiGooglemaps, SiGmail } from 'react-icons/si';
import { SlScreenSmartphone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Form from './Form';

const Contactus = () => {
  return (
    <div id="section-4" className="flex flex-col p-6 md:pl-36 md:pr-36 md:pt-10 md:flex-row">
      <div className="md:w-1/2">
        <p className="text-xs text-purple-600 font-bold md:text-sm">CONTACT DETAILS</p>
        <h1 className="font-bold text-2xl md:text-4xl">CONTACT US</h1>
        <p className="text-gray-500 md:max-w-md pt-4">
          Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days. We will be happy to answer your questions.
        </p>
        <span className="md:px-10 text-3xl pt-6 text-blue-500"><SiGooglemaps /></span>
        <div className="md:px-10">
          <h1>Address</h1>
          <p>2108 N ST</p>
          <p>Sacramento, California 95816</p>
        </div>
        <span className="md:px-10 text-3xl pt-6 text-red-500"><SiGmail /></span>
        <div className="md:px-10">
          <Link to="mailto:hr@mdis.tech">
            <p className="font-semibold">Email: hr@mdis.tech</p>
          </Link>
        </div>
        <span className="md:px-10 text-3xl pt-4"><SlScreenSmartphone /></span>
        <div className="md:px-10">
          <p>Mobile: +1 (650)-753-7333</p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contactus;

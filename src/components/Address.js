import React from 'react';
import { TbMapSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Address = () => {
  return (
    <div className=" flex-wrap hidden md:flex   items-center">
      <div className="w-full md:w-1/3 p-4">
        <div className="border p-4 rounded-lg shadow-md border-hover text-center h-full">
          <div className="flex items-center justify-center mb-4">
            <TbMapSearch className="text-[50px]" />
          </div>
          <p className="pt-4 text-base md:text-lg">
            <h1>Address</h1>
            <p>2108 N ST, Sacramento</p>
            <p>California, 95816</p>
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <div className="border p-4 rounded-lg shadow-md border-hover text-center h-full">
          <div className="flex items-center justify-center mb-4">
            <FiPhoneCall className="text-[50px]" />
          </div>
          <p className="pt-4 text-base md:text-lg">
            <h1>Phone</h1>
            <p>(650) 753-7333</p>
            <p>(650) 753-7374</p>
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <div className="border p-4 rounded-lg shadow-md border-hover text-center h-full">
          <div className="flex items-center justify-center mb-4">
            <TfiEmail className="text-[55px]" />
          </div>
          <p className="pt-4 text-base md:text-lg">
            <h1 className='font-medium'>Email</h1>
            <p className='pt-5 font-medium'>hr@mdis.tech</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;

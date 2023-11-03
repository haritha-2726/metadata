import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { BsTelephone, BsFillHouseAddFill } from 'react-icons/bs';

const Base = () => {
  return (
    <div className="bg-gray-900 text-white p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="flex items-center">
            <img
              className="h-[100px]"
              alt="logo"
              src={logo}
              style={{ width: 'auto', maxHeight: '65px' }}
            />
            <div style={{ marginLeft: '10px' }}>
              <h1 className="text-orange-500">MDIS</h1>
              <p>We're your partner for all your IT needs, from helping you choose the right technology to implementing and managing complex systems.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Address</h1>
            <div className="flex items-center">
              <span className="text-orange-500"><BsFillHouseAddFill /></span>
              <p>2108 N ST, Sacramento, California 95816</p>
            </div>
            <div className="flex items-center">
              <CgMail className="text-orange-500" />
              <Link to="mailto:hr@mdis.tech">
                <p>hr@mdis.tech</p>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500"><BsTelephone /></span>
              <p>+1(650)-753-7333</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Get exclusive updates straight to your inbox</h1>
            <div className="flex items-center">
              <input type="email" placeholder="Email us" className="bg-white text-black p-2 rounded" />
              <a href="mailto:your-email@example.com">
                <span style={{ marginLeft: '10px', cursor: 'pointer' }}>&#9658;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;

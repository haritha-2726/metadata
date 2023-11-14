 
 


import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => { 
  return (
    <div className="back3 text-white  sm:px-4 md:px-6 lg:px-8 flex flex-wrap justify-between"  >
      <div className="text-2xl flex w-full sm:w-auto">
        <span>
          <CiLinkedin />
        </span>
        <span className="vertical-line"></span>
        <span>
          <CiFacebook />
        </span>
        <span className="vertical-line"></span>
        <span>
          <CgMail />
        </span>
        <span className="vertical-line"></span>
        <span>
          <MdPhoneIphone />
        </span>
      </div>

      <div className="hidden sm:flex items-center  ">
        <span className="vertical-line"></span>
        <span className="flex gap-2 items-center">
          <CgMail />
          <Link to="mailto:metadataintegratedsolutions@gmail.com">
            <p className="font-semibold">Email:hr@mdis.tech</p>
          </Link>
        </span>
        <span className="vertical-line"></span>
        <span className="flex gap-2 items-center">
          <BsTelephone />
          <span>+1 (650)-753-7333 </span>
        </span>
        <span className="vertical-line"></span>
      </div>
    </div>
  );
};

export default Footer;




 


  
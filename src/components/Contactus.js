import React from 'react';
// import Form from './Form';
// import Address from './Address';
import { TbMapSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Contactus = () => {
  return (
    <>
    <h1 id="section-4" className="font-thin text-2xl md:text-5xl text-center p-10  " style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
         Contact Us
        </h1>
    <div class="contact-container pb-10">
  
    <div class="card">
  <div class="card-content">
  
    <h1 className=' text-orange-700'>Send us a message</h1>
    <p>Our team loves to solve your challenges and delighted to chat with you about your project and opportunities</p>
    <form>
      <div class="input-group">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div>
        <label className='pt-2' for="message">Message:</label>
        <textarea id="message"   name="message" required></textarea>
      </div>
      <button type="submit" className="send-button  m-4">Send</button>
    </form>
  </div>
  <div class="card-info">
 
  <div className="p-4 bg-orange text-white">
  <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
  <div className="flex items-center mb-2">
    <TbMapSearch className="text-2xl mr-2" />
    <p>2108 N ST, California, 95816</p>
  </div>
  <div className="flex items-center mb-2">
    <FiPhoneCall className="text-2xl mr-2" />
    <p>Phone: (650) 753-7333</p>
  </div>
  <div className="flex items-center mb-2">
    <TfiEmail className="text-2xl mr-2" />
    <p>Email: hr@mdis.tech</p>
  </div>
  <a href="https://www.linkedin.com/" target="blank" className="linkedin-link">Follow us on LinkedIn</a>
</div>

  </div>
</div>
</div>




    </>
  );
};

export default Contactus;

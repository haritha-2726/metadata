import React from 'react';
import { TbMapSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import   { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xgejbadw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsMessageSent(true); // Update state to show success message
        setFormData({ name: '', email: '', message: '' }); // Clear form inputs

        // Reset the success message after 3 seconds (adjust as needed)
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      } else {
        console.error('Failed to submit form');
        // Add logic here for failure, like showing an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Add logic here for error handling
    }
  };
  return (
    <>
      <h1 id="section-4" className="font-thin text-2xl md:text-5xl text-center p-10 pt-[170px]" style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.7)' }}>
        Contact Us
      </h1>
      <div className="contact-container pb-10">
        <div className="card">
          <div className="card-content">
            <h1 className="text-orange-700">Send us a message</h1>
            {isMessageSent && <p className="text-green-500">Message sent successfully!</p>}
            {!isMessageSent && (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label className="pt-2" htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="send-button m-4">
                  Send
                </button>
              </form>
            )}
          </div>
  <div className="card-info">
 
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
  <a href="https://www.linkedin.com/company/metadata-integrated-solutions-LLC/" target="blank" className="linkedin-link">Follow us on LinkedIn</a>
</div>

  </div>
</div>
</div>




    </>
  );
};

export default Contactus;

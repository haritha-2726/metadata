// import React from 'react';
// import { SiGooglemaps, SiGmail } from 'react-icons/si';
// import { SlScreenSmartphone } from 'react-icons/sl';
// import { Link } from 'react-router-dom';
// import Form from './Form';

// const Contactus = () => {
//   return (
//     <>
//       <div className='back3'>
//         <div className='flex flex-col p-6 md:p-36'>
//           <h1 className='text-white font-thin text-2xl md:text-5xl'>Contact us</h1>
//           <p className='text-white font-serif text-2xl md:text-5xl'>We will reach out to you soon...</p>
//         </div>
//       </div>
//       <div className='flex flex-col p-6 md:pl-36 md:pr-36 md:pt-10'>
//         <p className='text-xs text-purple-600 font-bold px-4 md:text-xs'>//CONTACT DETAILS</p>
//         <h1 className='font-bold px-4 text-2xl md:text-4xl'>CONTACT US</h1>
//         <p className='text-gray-500 w-full md:max-w-2xl pt-4 px-4'>Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days. We will be happy to answer your questions.</p>
//         <span className='px-10 text-3xl pt-6 text-blue-500'><SiGooglemaps/></span>
//         <div className='px-10 pt-4'>
//           <h1>Address</h1>
//           <p>522 W Riverside Ave. Suite N</p>
//           <p>Spokane, Washington 99201</p>
//         </div>
//         <span className='px-10 text-3xl pt-6 text-red-500'><SiGmail/></span>
//         <div className='px-10 pt-4'>
//           <Link to='mailto:metadataintegratedsolutions@gmail.com'>
//             <p className='font-semibold'>Email: metadataintegratedsolutions@gmail.com</p>
//           </Link>
//         </div>
//         <span className='px-10 text-3xl pt-4'><SlScreenSmartphone/></span>
//         <div className='px-10 pt-4'>
//           <p>Mobile: 9876554400</p>
//         </div>
//       </div>
//       <div className=''>
//           <div className=' '>
//             <Form />
//           </div>
//           </div>
      
//     </>
//   );
// };

// export default Contactus;

import React from 'react';
import { SiGooglemaps, SiGmail } from 'react-icons/si';
import { SlScreenSmartphone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Form from './Form';

const Contactus = () => {
  return (
    <>
      <div className='back3'>
        <div className='flex flex-col p-6 md:p-36'>
          <h1 className='text-white font-thin text-2xl md:text-5xl'>Contact us</h1>
          <p className='text-white font-serif text-2xl md:text-5xl'>We will reach out to you soon...</p>
        </div>
      </div>
      <div className='flex flex-col p-6 md:pl-36 md:pr-36 md:pt-10 md:flex-row'>  
        <div className='md:w-1/2'>  
          <p className='text-xs text-purple-600 font-bold px-4 md:text-xs'>CONTACT DETAILS</p>
          <h1 className='font-bold px-4 text-2xl md:text-4xl'>CONTACT US</h1>
          <p className='text-gray-500 w-full md:max-w-2xl pt-4 px-4'>Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days. We will be happy to answer your questions.</p>
          <span className='px-10 text-3xl pt-6 text-blue-500'><SiGooglemaps/></span>
          <div className='px-10 '>
            <h1>Address</h1>
            <p>522 W Riverside Ave. Suite N</p>
            <p>Spokane, Washington 99201</p>
          </div>
          <span className='px-10 text-3xl pt-6 text-red-500'><SiGmail/></span>
          <div className='px-10  '>
            <Link to='mailto:metadataintegratedsolutions@gmail.com'>
              <p className='font-semibold'>Email: metadataintegratedsolutions@gmail.com</p>
            </Link>
          </div>
          <span className='px-10 text-3xl pt-4'><SlScreenSmartphone/></span>
          <div className='px-10  '>
            <p>Mobile: 9876554400</p>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center items-center'> {/* Added md:w-1/2 and flex classes */}
          <div className='w-3/4 md:w-1/2'>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

 
 



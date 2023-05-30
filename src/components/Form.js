 

import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setPhone('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className='px-4 py-2'>
        <label htmlFor="name" className="inline-block w-32">Name *</label>  
        <input
          className='text-gray-600 border-gray-400 border w-96'  
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="email" className="inline-block w-32">Email Address *</label>
        <input
          className='text-gray-600 border-gray-400 border  w-96 '
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="phone" className="inline-block w-32">Phone *</label>
        <input
          className='text-gray-600 border-gray-400 border w-96'
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="text" className="inline-block w-32">Text</label>
        <textarea
          className='text-gray-600 border-gray-400 border w-96'
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex justify-center"> 
      <button  className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
      </div>
    </form>
       

  );
};

export default Form;


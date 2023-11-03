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
        <label htmlFor="name" className="inline-block w-32 sm:w-48 md:w-64 lg:w-80">Name <span className=' text-red-600'> * </span> </label>
        <input
          className='text-gray-600 border-gray-400 border w-full sm:w-96 md:w-80 lg:w-96 pl-2 bg-gray-100'
          id="name"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="email" className="inline-block w-32 sm:w-48 md:w-64 lg:w-80">Email Address <span className=' text-red-600'> * </span> </label>
        <input
          className='text-gray-600 border-gray-400 border w-full sm:w-96 md:w-80 lg:w-96 pl-2 bg-gray-100'
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="phone" className="inline-block w-32 sm:w-48 md:w-64 lg:w-80">Phone <span className=' text-red-600'> * </span> </label>
        <input
          className='text-gray-600 border-gray-400 border w-full sm:w-96 md:w-80 lg:w-96 pl-2 bg-gray-100'
          type="tel"
          id="phone"
          placeholder='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className='px-4 py-2'>
        <label htmlFor="text" className="inline-block w-32 sm:w-48 md:w-64 lg:w-80">Text <span className=' text-red-600'> * </span> </label>
        <textarea
          className='text-gray-600 border-gray-400 border w-full sm:w-96 md:w-80 lg:w-96 pl-2 bg-gray-100'
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Your comment'
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

import React from 'react';
import Main from './Main';
import back from '../images/backgroundimage.jpeg';

const Body = () => {
  const mainStyle = {
    backgroundImage: `url(${back})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div id="section-1" className=" " style={mainStyle}>
      <Main />
    </div>
  );
};

export default Body;

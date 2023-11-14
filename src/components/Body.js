import React from 'react';
import Main from './Main';
import back from '../images/backgroundimage.jpeg';
 
const Body = () => {
  const mainStyle = {
    backgroundImage: `url(${back})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    minHeight: '100vh',
    position: "relative"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",  
    zIndex: 1
  };

  return (
    <div id="section-1" style={mainStyle}>
      <div style={overlayStyle}></div>  
      <Main/>
    </div>
  );
};

export default Body;
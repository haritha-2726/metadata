import React from 'react'
import Main from './Main'
import  back from "../images/backgroundimage.jpeg";

const Body = () => {
  const mainStyle = {
    backgroundImage: `url(${back})`, 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Corrected property name
    minHeight: '100vh',  
  };
  return (
    <div id="section-1" className=' content' style={mainStyle}> 
    <Main/>
    </div>
  )
}

export default Body

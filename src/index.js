import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './App.css';
import Body from './components/Body';
import {HeaderComponent} from './components/Header';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Contactus from './components/Contactus';
// import Footer from './components/Footer';
import Base from "./components/Base"
import Whoweare from './components/Whoweare';

const AppLayout = () => {
  return (
    <>
     
   
  <HeaderComponent />
  <Body/>
   
      
       
      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes> */}
      <Aboutus/>
      <Whoweare/>
      <Services  />
      <Contactus/>
      <Base/>
       
    </>
  );
};

ReactDOM.render(
  <Router>
    <AppLayout />
  </Router>,
  document.getElementById('root')
);

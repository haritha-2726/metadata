import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './App.css';
import Body from './components/Body';
import { HeaderComponent } from './components/Header';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Base from "./components/Base"
import Whoweare from './components/Whoweare';

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Aboutus />
      <Whoweare />
      <Services />
      <Contactus />
      <Base />
    </>
  );
};

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Router>
    <AppLayout />
  </Router>
);

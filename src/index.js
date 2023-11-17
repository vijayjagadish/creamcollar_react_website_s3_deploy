import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Mergedindex from './Website/Index/Mergedindex';

import About from './Website/About/About';

import Contact from './Website/Contact/Contact';

import ComponentB from './Website/Dummy/ComponentB';

import Login from './Website/Login';

import Logout from './Website/Logout';

import ForgotPassword from './Website/ForgotPassword';

import Dashboard from './Website/Dashboard';

import Register from './Website/Register';
 
ReactDOM.render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<Mergedindex />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/dummy" element={<ComponentB />} />

      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />

      <Route path="/forgotpassword" element={<ForgotPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/register" element={<Register />} />

    </Routes>

  </BrowserRouter>,

  document.getElementById('root')

);
 
reportWebVitals();

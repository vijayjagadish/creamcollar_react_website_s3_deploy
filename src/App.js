import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mergedindex from './Website/Index/Mergedindex';
import About from './Website/About/About';
import Contact from './Website/Contact/Contact';

import ComponentB from './Website/Dummy/ComponentB';
import Login from './Website/Login';
import Logout from './Website/Logout';
import ForgotPassword from './Website/ForgotPassword';
import Dashboard from './Website/Dashboard';
import Register from './Website/Register';




function App()  {
  return (
<Router>

    <Routes>
      <Route  path='/' Component={Mergedindex}/>
      <Route  path='/about' Component={About}/>
      <Route  path='/contact' Component={Contact}/>
      
      <Route path='/dummy' Component={ComponentB}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='logout' element={<Logout/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>

</Router>
      
   
  );
}

export default App;

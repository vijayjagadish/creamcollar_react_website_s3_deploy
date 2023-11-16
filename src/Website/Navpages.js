import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myImage from '../assets/img/creamcollar-logo.svg';
import linkedin_img from '../assets/img/linkedin.svg';
function Navpages()  {

    const [isTimes, setIsTimes] = useState(false);

    const handleToggle = () => {
      setIsTimes(!isTimes);
    };

    return (
      
        
       
<header className="sticky-top" >
  <nav className="navbar navbar-expand-lg">
    <div className="container-lg"> <a className="navbar-brand" href="#"><img src={myImage} alt=""/></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav navbar-left me-auto">
        <li className="nav-item"> <NavLink to="/" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Home</NavLink> </li>
        <li className="nav-item"> <NavLink to="/about" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>About Us</NavLink> </li>
        <li className="nav-item"> <NavLink to="/contact" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Contact Us</NavLink> </li>
        {/* <li className="nav-item"> <NavLink to="/blog" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Blogs</NavLink> </li> */}
      </ul>
      <ul className="navbar-nav navbar-right">
        <li className="nav-item"> <NavLink to="/login" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Login</NavLink> </li>
        <li className="nav-item"> <NavLink to="/register" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Sign Up</NavLink> </li>
      
       
      </ul>
      </div>
      
      <ul className="navbar-nav navbar-right">
    
        <li className="nav-item"> <a className="nav-link" href="https://www.linkedin.com/company/creamcollar" target="_blank"><img src={linkedin_img} alt=""/></a> </li>
      
       {/* 
       <li className="menu-btn" type="button" data-bs-toggle="offcanvas" href="#menu" role="button" aria-controls="menu"> <a className="nav-link" href="#"><i className="las la-bars"></i> </a> </li>
      */}
   <li className="menu-btn " onClick={handleToggle} type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" role="button" aria-controls="menu"> <a className="nav-link" href="#"><i className={`las la-bars ${isTimes ? 'la-times' : ''}`}></i> </a> </li>
      
    </ul>
    
    </div>
  </nav>
  
</header>
        
     
     
    );
  }
  
  export default Navpages;
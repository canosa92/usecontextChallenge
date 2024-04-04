import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import  '../index.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/myjob">My Job</Link></li>
       <li><Button /></li> 
      </ul>
      
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import './Navbar.css'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (<div className='Navbar'>
    <Link to="/"><img src={Logo} alt="logo" /></Link>
    <Link to="/">Home</Link>
    <a href="#exercises" >Exercises</a>
    <Link to="/BmiCalculator">BMI Calculator</Link>
    {
      localStorage.getItem('token') ? (
        <div className='utils'>
          <Link to='/auth?type=login'>Login</Link>
          <Link to='/auth?type=signup'><span>Sign Up</span></Link>
        </div>) : (
        <div className='utils'>
          <div className="name">Suyog</div>
        </div>
      )
    }
  </div>);

};

export default Navbar;

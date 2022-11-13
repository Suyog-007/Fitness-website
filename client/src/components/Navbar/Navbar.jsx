import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import './Navbar.css'

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const loggedInData = JSON.parse(localStorage.getItem('fitnessUser'));
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('fitnessUser');
  };

  return (<div className='Navbar'>
    <Link to="/"><img src={Logo} alt="logo" /></Link>
    <Link to="/">Home</Link>
    <a href="#exercises" >Exercises</a>
    <Link to="/BmiCalculator">BMI Calculator</Link>
    {
      !isAuthenticated ? (
        <div className='utils'>
          <Link to='/auth?type=login'>Login</Link>
          <Link to='/auth?type=signup'><span>Sign Up</span></Link>
        </div>) : (
        <div className='utils'>
          <div className="name">{loggedInData.user.firstName + " " + loggedInData.user.lastName}</div>
          <div className="logout" onClick={logout}>Logout</div>
        </div>
      )
    }
  </div>);

};

export default Navbar;

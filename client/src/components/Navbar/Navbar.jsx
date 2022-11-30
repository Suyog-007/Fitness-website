import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import './Navbar.css'

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [loggedInData, setLoggedInData] = useState(JSON.parse(localStorage.getItem('fitnessUser')));
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('fitnessUser');
  };

  useEffect(() => {
    const userData = localStorage.getItem('fitnessUser');
    if (userData) {
      setLoggedInData(JSON.parse(userData));
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (<div className='Navbar'>
    <Link to="/"><img src={Logo} alt="logo" /></Link>
    <Link to="/">Home</Link>
    <a href="#exercises" >Exercises</a>
    <Link to="/BmiCalculator">BMI Calculator</Link>
    <Link to='/review'>Review</Link>
    <Link to="/news">News</Link>
    <Link to="/category">Workouts</Link>
    {
      !isAuthenticated ? (
        <div className='utils'>
          <Link to='/auth?type=login'>Login</Link>
          <Link to='/auth?type=signup'><span>Sign Up</span></Link>
        </div>) : (
        <div className='utils'>
          <div className="name">{loggedInData && loggedInData.user && loggedInData.user.firstName + " " + loggedInData && loggedInData.user && loggedInData.user.lastName}</div>
          <div className="logout" onClick={logout}>Logout</div>
        </div>
      )
    }
  </div>);

};

export default Navbar;

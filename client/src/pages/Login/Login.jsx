import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Login.css'
import Logo from '../../assets/images/Logo.png'
import banner1 from '../../assets/images/authBanner1.jpg';
import banner2 from '../../assets/images/authBanner2.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SERVER_API_URL = process.env.REACT_APP_API_URL;

const Login = ({ setIsAuthenticated }) => {
  const container = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const loginChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const signupChangeHandler = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${SERVER_API_URL}/user/signup`, signupData);
      navigate("/login?type=login");
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${SERVER_API_URL}/user/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      const userData = {
        token: res.data.token,
        user: res.data.user,
      }
      const stringifiedData = JSON.stringify(userData);
      localStorage.setItem('fitnessUser', stringifiedData);
      setIsAuthenticated(true);
      navigate("/");
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }


  const toggleAuth = () => {
    if (container && container.current) {
      if (type === "login") {
        container.current.classList.remove("right-panel-active");
      }
      if (type === "signup") {
        container.current.classList.add('right-panel-active');
      }
    }
  }

  useEffect(() => {
    toggleAuth();
  }, [type])

  return (
    <div className='Login'>
      <div class="container" ref={container}>
        <div class="form-container sign-up-container">
          <form action="#">
            <img src={Logo} alt="" />
            <input type="text" placeholder="First Name" name='firstName' onChange={signupChangeHandler} />
            <input type="text" placeholder="Last Name" name='lastName' onChange={signupChangeHandler} />
            <input type="email" placeholder="Email" name='email' onChange={signupChangeHandler} />
            <input type="password" placeholder="Password" name='password' onChange={signupChangeHandler} />
            <button onClick={signup}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <img src={Logo} alt="" />
            <input type="email" placeholder="Email" name='email' onChange={loginChangeHandler} />
            <input type="password" placeholder="Password" name='password' onChange={loginChangeHandler} />
            <button onClick={login}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <div className='overlay_wrapper'>
                <img src={banner1} alt="" />
                <div className='overlay-content'>
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button class="ghost" onClick={() => {
                    setSearchParams({ "type": "login" })
                  }}>Sign In</button>
                </div>
                <div className='socials'>
                  <AiOutlineTwitter />
                  <FaFacebookF />
                  <AiFillInstagram />
                </div>
              </div>

            </div>
            <div class="overlay-panel overlay-right">
              <div className='overlay_wrapper'>
                <img src={banner2} alt="" />
                <div className='overlay-content'>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button class="ghost" onClick={() => {
                    setSearchParams({ "type": "signup" })
                  }}>Sign Up</button>
                </div>
                <div className='socials'>
                  <AiOutlineTwitter />
                  <FaFacebookF />
                  <AiFillInstagram />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
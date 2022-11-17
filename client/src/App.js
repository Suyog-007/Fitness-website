import React, { useEffect, useState } from 'react'
import './App.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcersiceDetail';
import BmiCalculator from './pages/BmiCalculator';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './pages/Review/Review';
import News from './pages/News'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <ToastContainer />
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/review' element={<Review />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
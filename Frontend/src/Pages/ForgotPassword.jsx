import React, { useState } from 'react'
import './Css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import axios from 'axios';
const ForgotPassword = () => {
  const [Email, setEmail] =  useState('');
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setEmail(e.target.value)
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/api/user/forgot_password',{Email:Email});
      if(result.data.message.includes('Sent')){
        navigate('/otp_verification')
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <div className='main-container'>
        <div className="container">
          <h1>Enter your Email</h1>
          <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input 
            type="email" 
            required
            onChange={handleChange}
            value={Email}
            name='Email'
            placeholder='Enter Your Email' />
          </div>
          <button type='submit' className='submitBtn'><h4>Send OTP </h4><FaArrowRight /></button>
          </form>
          <p className='exists'><Link to={'/login'} className='link'>Go Back</Link></p>
        </div>    
      </div>
    );
  };
  

export default ForgotPassword
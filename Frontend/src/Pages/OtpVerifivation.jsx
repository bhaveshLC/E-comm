import React, { useState } from 'react'
import './Css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

const OtpVerifivation = () => {
    const [otp, setOtp] = useState('');
    const [msg, setMsg] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setOtp(e.target.value);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsCorrect(true);
        try {
            const result = await axios.post("http://localhost:3001/api/user/otp_verification",{otp:otp});
            if(result.data.message.includes('Valid')){
              console.log("Valid OTP")
              setMsg(result.data.message);
              navigate('/change_password');
            }
            else{
              setMsg(result.data.message);
              console.log('Enter valid OTP')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='main-container'>
        { isCorrect && (
          <p className='reg_error'>{msg}</p>
            )
        }
          <div className="container">
            <h1>Enter OTP</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input 
              type="text" 
              required
              onChange={handleChange}
              value={otp}
              name='otp'
              placeholder='Enter Your OTP' />
            </div>
            <button type='submit' className='submitBtn'><h4>Validate OTP </h4><FaArrowRight /></button>
            </form>
            <p className='exists'><Link to={'/forgot_password'} className='link'>Go Back</Link></p>
          </div>    
        </div>
      );
    };

export default OtpVerifivation;
import React, { useState } from 'react'
import './Css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        Email:"",
        password: "",
        newPassword:"",
    })
    const [msg, setMsg] = useState('');
    const [isChange, setIsChange] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setIsChange(true);
        try {
            const result = await axios.post("http://localhost:3001/api/user/change_password", formData);
            if(result.data.message.includes('Changes')){
                console.log(result.data.message);
                setMsg(result.data.message);
                navigate('/login');
              }
              else{
                setMsg(result.data.message);
                console.log('Enter valid OTP')
              }
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
  return (
    <div className='main-container'>
        { isChange && (
            <p className='reg_error'>{msg}</p>
            )
        }
          <div className="container">
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input 
              type="email" 
              required
              onChange={handleChange}
              value={formData.Email}
              name='Email'
              placeholder='Enter your Email' />
            </div>
            <div className="input-field">
              <input 
              type="password" 
              required
              onChange={handleChange}
              value={formData.password}
              name='password'
              placeholder='Enter new password' />
            </div>
            <div className="input-field">
              <input 
              type="password" 
              required
              onChange={handleChange}
              value={formData.newPassword}
              name='newPassword'
              placeholder='Re-Enter password' />
            </div>
            <button type='submit' className='submitBtn'><h4>Change Password </h4><FaArrowRight /></button>
            </form>
            <p className='exists'><Link to={'/otp_verification'} className='link'>Go Back</Link></p>
          </div>    
        </div>
  )
}

export default ChangePassword
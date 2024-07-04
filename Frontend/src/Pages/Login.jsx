import React, { useState } from 'react'
import './Css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    Email:"", 
    Password:""
  })
  const [login, setLogin] = useState(false);
  const [msg , setMsg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleLogin = async(e) =>{
    e.preventDefault();
    setLogin(true);
    try {
      const result = await axios.post('http://localhost:3001/api/user/login',formData);
      if(result.data.message.includes('Login Successful')){
        navigate('/products')
      }
      else{
        setMsg(result.data.message);
      }
    } catch (error) {
        console.log(error) 
        setMsg("Invalid Credantials");
    }
  }
    return (
      <div className='main-container'>
      { login && (
        <p className='reg_error'>{msg}</p>
      )
      }
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
          <div className="input-field">
            <input 
            type="email" 
            required 
            value={formData.Email}
            onChange={handleChange}
            name='Email'
            placeholder='Email' />
            <input 
            type="password" 
            required
            onChange={handleChange}
            value={formData.Password} 
            name='Password'
            placeholder='Password' />
          </div>
          <button type='submit'>Login</button>
          </form>
          <p className='exists'>Forgot Password? <Link to={'/forgot_password'} className='link'>Click Here</Link></p>

          <p className='exists'>New User? <Link to={'/signup'} className='link'>Signup</Link></p>
        </div>    
      </div>
    );
  };
  
export default Login
import React, { useState } from 'react';
import './Css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; 
const Signup = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: ""
  });
  const [register, setRegister] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setRegister(true);
    e.preventDefault();
    try {
        const result = await axios.post('http://localhost:3001/api/user/signup', formData);
        setMsg(result.data);
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    } catch (err) {
        if (err.response && err.response.status === 400) {
            setMsg(err.response.data.message);
        } else {
            console.error(err);
            setMsg("An error occurred. Please try again.");
        }
    }
};


  return (
    <div className='main-container'>
      { register && (
        <p className={msg.includes('Successully Created')? 'reg_success': 'reg_error'}>{msg}</p>
      )
      }
      <div className="container">
        <h1 className='text-green-500'>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              required
              value={formData.Name}
              onChange={handleChange}
              placeholder='Name'
              name='Name' />

            <input type="email"
              required
              value={formData.Email}
              onChange={handleChange}
              placeholder='Email'
              name='Email' />

            <input type="password"
              required
              value={formData.Password}
              onChange={handleChange}
              placeholder='Password'
              name='Password' />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className='exists'>Already have an account? <Link to={'/login'} className='link'> Login</Link></p>
        <div className='agree'>
          <input type="checkbox" />
          <p>I agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

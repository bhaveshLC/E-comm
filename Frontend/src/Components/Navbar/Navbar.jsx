import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Context } from '../../Context/Context';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const {getTotalCartItems} = useContext(Context)
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
        <h2>E-commerce</h2>
        </div>
     
      <div className="login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

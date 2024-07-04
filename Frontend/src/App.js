import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop.jsx';
import Signup from './Pages/Signup.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Login from './Pages/Login.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import OtpVerifivation from './Pages/OtpVerifivation.jsx';
import ChangePassword from './Pages/ChangePassword.jsx';
import AddProduct from './Pages/AddProduct.jsx';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Shop />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/otp_verification' element={<OtpVerifivation />} />
        <Route path='/change_password' element={<ChangePassword />} />
        <Route path='/add_products' element={<AddProduct />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product' element={<Product />} category="product">
        <Route path=':productId' element={<Product />} category="product"/>
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

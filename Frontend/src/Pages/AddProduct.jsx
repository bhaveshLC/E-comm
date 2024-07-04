import React, { useState } from 'react'
import './Css/LoginSignup.css';
const AddProduct = () => {
    const [formData, setFormData] = useState({
        id:0,
        title: "",
        price: 0,
        description: "",
        category: "",
        rating:{
            rate:0.0,
            count: 120,
        }
        
    })
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.name});
    }

    const handleSubmit = async(e) =>{
        e.prevetnDefault();
        console.log(formData);
    }
  return (
    <div className='main-container'>
        <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input 
              type="text" 
              required
              onChange={handleChange}
              value={FormData.title}
              name='title'
              placeholder='Enter Your Product Name' />
              <input 
              type="number" 
              required
              onChange={handleChange}
              value={FormData.price}
              name='price'
              placeholder='Enter Price' />
              <input 
              type="text" 
              required
              onChange={handleChange}
              value={FormData.description}
              name='description'
              placeholder='Enter Your Product Description' />
              <input 
              type="text" 
              required
              onChange={handleChange}
              value={FormData.category}
              name='name'
              placeholder='Enter Your Product category' />
              <input 
              type="number" 
              required
              onChange={handleChange}
              value={FormData.rating}
              name='rating'
              placeholder='Rating' />
              <input 
              type="number" 
              required
              onChange={handleChange}
              value={FormData.count}
              name='count'
              placeholder='Count' />
            </div>
            <button type='submit' className='submitBtn'><h4>Add Product </h4></button>
        </form>
    </div>
  )
}

export default AddProduct
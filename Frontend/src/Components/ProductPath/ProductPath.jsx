import React from 'react'
import './ProductPath.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcum = (props) => {
    const {product} = props;
    const category = product?.category;
    const title = product?.title;
  return (
    <div className='path'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
        {category} <img src={arrow_icon} alt="" />{title} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default Breadcum
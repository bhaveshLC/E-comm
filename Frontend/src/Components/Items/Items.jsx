import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
const Items = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p className='item-name'>{props.title}</p>
        <div className="item-price">
            <div className="item-new-price">
                ${props.price}
            </div>
        </div>
    </div>
  )
}

export default Items
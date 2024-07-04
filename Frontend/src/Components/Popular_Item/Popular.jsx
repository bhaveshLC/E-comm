import React, { useContext } from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'
import { Context } from '../../Context/Context'
const Popular = () => {
  const {all_product} = useContext(Context)
  return (
    <div className="popular-main">
      <h1 className='popular-heading'>Popular Products</h1>
    <div className='popular'>
        
        <hr />
        <div className="popular-item">
            {all_product.map((item,index)=>{
                return <Items key={index} id={item.id} title={item.title} image={item.image}
                        price={item.price} />
            })}
        </div>
    </div>
    </div>
  )
}

export default Popular
import React, { useContext } from 'react'
import './ProductInfo.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Context } from '../../Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = (props) => {
    const {product} = props;
    const {addToCart}= useContext(Context);
    const toastMessage = ()=>{
        toast('Successfully added to cart', {
            position: 'top-center',
            autoClose: 2000,
          });
    }
    const image = product?.image;
    const title = product?.title;
    const price = product?.price;
    const description = product?.description;
    const count = product?.rating.count;
    const category = product?.category;
    const id = product?.id;
  return (
    <div className='product_info'>
        <ToastContainer />
        <div className="left">
            <div className="productdisplay-img">
            <img src={image} alt="" className='main-img' />

            </div>
        </div>
        <div className="right">
            <h1>{title}</h1>
            <div className="review-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
            </div>
            <div className="price">
                 <div className="new-price">
                    ${price}
                </div>
               
            </div>
            <div className="description">
                {description}
            </div>
            <div className="product-size">
                Count : {count}
            </div>
            <button onClick={()=>{addToCart(id); toastMessage()}}>  ADD TO CART</button>
            <p className='product-category'> <span>Category: </span>{category}</p>
            <p className='product-category'> <span>Tags: </span>Trending, Latest</p>

        </div>
    </div>
  )
}

export default ProductInfo
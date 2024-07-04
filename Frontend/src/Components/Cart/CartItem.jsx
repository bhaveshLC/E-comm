import React, { useContext } from 'react'
import './CartItem.css'
import { Context } from '../../Context/Context'
import remove_icon from '../Assets/cart_cross_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = (props) => {
    const {all_product, cartItems, handleOrder ,addToCart,getTotalCartAmount ,removeFromCart}= useContext(Context);
    const toastMessage = () => {
            toast.success('Successfully added to cart', {
                position: 'top-center',
                autoClose: 2000,
            });
        
    }
    
    return (
    <div className='main-cart'>
    
        <ToastContainer />
        <div className="cart">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e,index)=>{
            if(cartItems[e.id]>0)
            { 
                return <div key={index}>
    <div className="cart-items">
      <img src={e.image} alt="" className='item-img'/>
      <p>{e.title}</p>
      <p>${e.price}</p>
      <button className='item-quantity'> {cartItems[e.id]}</button>
      <p>{e.price * cartItems[e.id]}</p>
      <img src={remove_icon} alt="" onClick={() => removeFromCart(e.id)} />
    </div>
  </div>
            }
        })}
        <div className="cart-down">
            <div className="cart-total">
                <h1>cart Totals</h1>
                <div>
                <div className="cartitems-total">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button  onClick={()=> {
                toastMessage();
            }}>
                Proceed To Checkout
            </button>
        </div>
        <div className="promo-code">
            <p>Enter PromoCode Here</p>
            <div className='promo-box'>
                <input type="text" placeholder='promocode' />
                <button className='promo-btn'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItem
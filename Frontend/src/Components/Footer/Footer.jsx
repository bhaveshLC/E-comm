import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p className='Logo-name'>E-commerce</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icon">
            <div className="icon-container">
                <a href="https://www.instagram.com/" target='_blank'  rel="noreferrer"><img src={instagram_icon} alt="" /></a>
            </div>
            <div className="icon-container">
               <a href="https://www.pintester.com/"  target='_blank' rel="noreferrer"><img src={pintester_icon} alt="" /></a> 
            </div>
            <div className="icon-container">
                <a href="https://www.whatsapp.com/" target='_blank'  rel="noreferrer"><img src={whatsapp_icon} alt="" /></a>
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Research</p>
        </div>
    </div>
  )
}

export default Footer
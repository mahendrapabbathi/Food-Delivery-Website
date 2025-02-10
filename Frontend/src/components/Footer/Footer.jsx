import React from 'react'

const Footer = () => {
  return (
      <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum perspiciatis quasi laboriosam aspernatur magnam aliquid nesciunt quos labore aut!</p>
                <div className="footer-social-content">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-345-6789</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 &copy; Tomato.com - All Rights Reserved.
        </p>
      </div>
  )
}
import "./Footer.css"
import { assets } from '../../assets/assets'

export default Footer

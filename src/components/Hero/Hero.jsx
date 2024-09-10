import React from 'react'
import hand_icon from '../../components/Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import Hero_img from '../Assets/hero_image.png'
import hero from '../Hero/Hero.css'

 const Hero  = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hand-icon">
                    <p>New</p>
                    
                    <img src={hand_icon} alt="" srcset="" />
                </div>
                <p>Collection</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>


            </div>
        </div>
        <div className="hero-right">
            <img src={Hero_img} alt="" />

        </div>
    </div>
  )
}
export default Hero
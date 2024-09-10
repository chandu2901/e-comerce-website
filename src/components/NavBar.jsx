import React, { useState } from "react";
import Navbar from './Navbar.css'
import logo from '../components/Assets/logo_big.png'
import cart_icon from '../components/Assets/cart_icon.png'
import { Link } from "react-router-dom";


const NavBar = () =>{

  const [menu,setMenu] = useState('shop')

    return(
        <div>
        <div className="navbar">
      <div className="nav-logo">
                <img src={logo} alt="" />
                <p>BRANDSTORE</p>
       
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/shopcategory'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/shopcategorywomen'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewellery")}}><Link style={{textDecoration:'none'}} to='/shopcategoryjewellery'>Jewellery</Link>{menu==="jewellery"?<hr/>:<></>}</li>
               
                <li onClick={()=>{setMenu("electronics")}}><Link style={{textDecoration:'none'}} to='/shopcategoryelectronics'>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Profile")}}><Link style={{textDecoration:'none'}} to='/Profile'>Profile</Link>{menu==="Profile"?<hr/>:<></>}</li>
                 </ul>
                 <div className="nav-login-cart">
                
                   <img src={cart_icon} alt="" />
                    
                    <div className="nav-cart-count">0</div>

                 </div>

        </div>
        
        <div style={{color: 'black'}}>  
        </div>
     </div>

    )
}
export default NavBar

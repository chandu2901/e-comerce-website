import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Mens from '../components/category/Mens'
import NavBar from '../components/NavBar'
import Women from '../components/category/Women'
import Electronics from '../components/category/Electronics'
import Jewellery from '../components/category/Jewellery'
import Profile from '../components/profile/Profile'


  export const Shopcategory = (props) => {
    const categorys = props.category
    console.log("categorys",categorys)
  return (
    <div>
             <NavBar/>
             {
              categorys === 'mens'? <Mens/>:
              categorys === 'womens'? <Women/>:
              categorys === 'jewellery'? <Jewellery/>:
              categorys === 'electronics'? <Electronics/>:<Profile/>
             }
        
       
    </div>
  )
}
export default Shopcategory
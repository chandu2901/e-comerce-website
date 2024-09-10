import React from 'react'
import men_product from '../Api assets/Mensclothing'
import { Item } from '../Item/Item'
import mens from '../category/Mens.css'

export const Mens  = () => {
  return (
    
    <div className='popular'>
        <div className="popular-left">
            <h2>POPULAR IN MEN</h2>
            <hr/>
            <div className="mens-item">
                {men_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating}/>

                })}
            </div>
        </div>

    </div>
  )
}
export default Mens
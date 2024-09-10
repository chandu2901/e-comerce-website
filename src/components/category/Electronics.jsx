import React from 'react'
import { Item } from '../Item/Item'
import electronics_product from '../Api assets/Electronics'
import electronics from '../category/Electronics.css'
export const Electronics  = () => {
  return (
    <div className='electronics'>
        <div className="popular-left">
            <h2>POPULAR IN ELECTRONICS</h2>
            <hr/>
            <div className="electronics-item">
                {electronics_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating}/>

                })}
            </div>
        </div>

    </div>
  )
}
export default Electronics
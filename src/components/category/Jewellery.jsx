import React from 'react'
import { Item } from '../Item/Item'
import jewelley_product from '../Api assets/Jewellery'
import jewellery from '../category/Jewellery.css'

export const Jewellery  = () => {
  return (
    <div className='jewellery'>
        <div className="popular-left">
            <h2>POPULAR IN JEWELLERY</h2>
            <hr/>
            <div className="jewellery-item">
                {jewelley_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating}/>

                })}
            </div>
        </div>

    </div>
  )
}
export default Jewellery
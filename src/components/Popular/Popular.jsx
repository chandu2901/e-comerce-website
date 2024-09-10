import React from 'react'
import popular from '../Popular/Popular.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const Popular  = () => {
  return (
    <div className='popular'>
        <div className="popular-left">
            <h2>POPULAR IN WOMEN</h2>
            <hr/>
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating} />

                })}
            </div>
        </div>

    </div>
  )
}
export default Popular
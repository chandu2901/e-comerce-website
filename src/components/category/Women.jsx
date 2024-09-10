import React from 'react'
import { Item } from '../Item/Item'
import womens_clothing from '../Api assets/Womensclothing'
import women from '../category/Women.css'


export const Women  = () => {
  return (

    <div className='women'>
     
        <div className="popular-left">
            <h2>POPULAR IN WOMEN</h2>
            <hr/>
            <div className="women-item">
                {womens_clothing.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating} />

                })}
            </div>
        </div>

    </div>
  )
}
export default Women
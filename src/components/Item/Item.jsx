import React from 'react'
import item from '../Item/Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image}alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.price}
                
            </div>
            <div className="item-rating">
                {`Rating ${props.rating.rate}`}
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../../../store/CartContext'

const MealItem = (props) => {
    const price =`$${props.price.toFixed(2)}`

    const ctx=useContext(CartContext);
    const addToCartHandler = amount => {
      ctx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
    }


  return (
    <li className={classes.meal} >
        <div>
            <h3> {props.name} </h3>
            <div className={classes.description} >{props.description} </div>
            <div className={classes.price} >{props.price} </div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddTocart={addToCartHandler} />
        </div>

    </li>
  )
}

export default MealItem
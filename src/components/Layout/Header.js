import React from 'react'
import  classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return ( 
    <>
        <header className={classes.header} >
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onshow} />
        </header>
        <div className={classes['main-image']} >
            <img src={meals} alt='table full of meals' />
        </div>
    </>
  )
}

export default Header
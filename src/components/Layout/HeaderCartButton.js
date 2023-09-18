import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext ,useEffect , useState} from 'react'
import CartContext from '../../store/CartContext'


const HeaderCartButton = (props) => {

  const [btnHight,setBtnIsHight] = useState(false)
    const ctx = useContext(CartContext);
    const {items} = ctx;
    // this component will re-render whenever the CartContext is updated by the provider component
    const numbeOfCartItems = items.reduce((current,item) =>{return current + item.amount}, 0 )


    const btnClasses = `${classes.button} ${btnHight ? classes.bump : ''}`
 
    useEffect(()=> {
      if(items.length === 0){
        return;
      }
      setBtnIsHight(true);

      setTimeout(()=> {
        setBtnIsHight(false);
      },300)
    },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon} > 
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge} >{numbeOfCartItems} </span> 
    </button>
  )
}

export default HeaderCartButton
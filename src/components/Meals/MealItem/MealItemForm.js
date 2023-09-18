import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef,useState  } from 'react';


const MealItemForm = (props) => {
    // add React.forwardRef() in Input comp
    const [amountIsValid ,setAmountIsValid] = useState(true)
    const amountInputRef=useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum=+enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return ;
        }
        props.onAddTocart(enteredAmountNum)
    }
  return (
    <form className={classes.form} onSubmit={submitHandler} >
        <Input
            ref= {amountInputRef}
            label="Amount" 
            Input={{
            id:'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1',

        }}/>
        <button>ADD</button>
        {!amountIsValid && <p> enter a valid amount</p> }
    </form>
  )
}

export default MealItemForm
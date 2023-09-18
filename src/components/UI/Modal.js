import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';
const  ModalOverlay =props =>{
    return <div className={classes.modal} >
        <div className={classes.content} >
            {props.children}
        </div>
    </div>
};
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} ></div>
};

const Modal = (props) => {

    const portal = document.getElementById('overlays');
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose ={props.onClose} />,portal)}
        {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>,portal)}
    </>
  )
}

export default Modal
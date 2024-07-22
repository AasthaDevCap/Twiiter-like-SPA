import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";


const Modal=(props)=>{
    const navigate=useNavigate();
    const onclosehandler=()=>{
       navigate('..') 
    }
return(
    <>
    <div className={classes.backdrop} 
    //  onClick={onclosehandler}
     >
    <dialog open className={classes.modal}>{props.children}</dialog></div></>
);
}
export default Modal;
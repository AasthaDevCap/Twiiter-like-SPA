import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";


const Modal = (props) => {
    const navigate = useNavigate();
    const onclosehandler = (e) => {
        if(e.target === e.currentTarget){ 
            navigate('..');
       }
    }
    return (
        <>
            <div className={classes.backdrop}
                onClick={(e)=>onclosehandler(e)}
            >
                <dialog  open className={classes.modal}>{props.children}</dialog></div></>
    );
}
export default Modal;
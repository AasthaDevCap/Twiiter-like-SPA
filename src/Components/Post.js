import React from "react";
import  classes from"./post.module.css";
import { Link } from "react-router-dom";

const Post =(props)=>{
    return(  
    <li className={classes.post}>
        <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
        </Link>
    </li>)

}
export default Post;
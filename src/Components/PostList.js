import React from "react";
import classes from "./PostList.module.css"
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    const posts=useLoaderData();
   
    return (

        <>
            {(posts.length > 0) && <ul className={classes.posts}>
                {posts.map((posts) => {
                    return (
                        <Post key={posts.body} id={posts.id} body={posts.body} author={posts.author} />
                    )
                })}

            </ul>}
            {(posts.length == 0) &&
                <div style={{ textAlign: "center", color: "white" }}>
                    <h1>There are no posts yet.</h1>
                    <p>Start adding some!</p>
                </div>}

        </>

    )

}
export default PostList;
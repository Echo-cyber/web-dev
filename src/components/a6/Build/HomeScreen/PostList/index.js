import PostItem from "./PostItem.js";
import React from "react";
import post from "./post.json"

const PostList = () => {
    return (
        <ul className="list-group mt-2">
            {
                post.map(p => {
                return(
                <li className="list-group-item">{PostItem(p)}</li>
                );
            })
            }
        </ul>
    );

}

export default PostList;
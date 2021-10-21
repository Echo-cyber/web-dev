import PostSummaryItem from "./PostSummaryItem";
import post from "./post.json";
import React from "react";

const PostSummaryList = () => {
    return (
        <>
        <ul className="list-group mt-2">
            {
                post.map(post => {
                    return(
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
        </>
        
    );
}

export default PostSummaryList;
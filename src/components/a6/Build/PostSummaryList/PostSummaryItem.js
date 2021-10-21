import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react.png"
        }

    }) => {
    const boldFont = {"fontWeight": "bold"}
    return (
        <>
            <li className="list-group-item">
            <div className="row g-0 align-items-center justify-content-between">
                <div className="col-10">
                    
                        <p className="card-title"><small className="text-muted">{post.topic}</small></p>
                        <p className="card-title" style={boldFont}>{post.userName} <i className="fas fa-check-circle"></i><small className="text-muted"> -{post.time}</small></p>
                        <p className="card-text">{post.title}</p>
                 
                </div>
                <div className="col-2">
                    <div className="wd-post-image">
                      <img className="rounded card-img-center img-fluid" src={post.image} width="100%"/>
                    </div>
                </div>
            </div>
            </li>
        </>
        
    );
}

export default PostSummaryItem;
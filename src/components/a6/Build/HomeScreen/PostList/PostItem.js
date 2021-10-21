import React from "react";


const PostItem = (post) => {
    const boldText = {"fontWeight": "bold"};
    const fullWidth = {"width": "100%"};

    const displayTitle = (post) => {
        if (post.title === "") {
            return (
                          <img className="card-img-top rounded" src={post.postImage} alt="Card image cap"/>
                    
            )
        }
        return ( <>         
                          <img className="card-img-top rounded" src={post.postImage} alt="Card image cap"/>
                          <div className="card-body border border-light">
                            <p className="card-text" style={boldText}>{post.title}</p>
                            <p className="card-text text-muted">{post.content}</p>
                            <span className="text-muted"><i className="fas fa-link"></i>{post.link}</span>
                          </div>
                  </>
                              )
    }

    return (
            <div className="row align-items-start">
                <div className="col-1">
                    <img className="rounded-circle" src={post.avatarIcon} width="40px" height="40px"/>
                </div>

                <div className="col-11">
                    <span><div>{post.username} <i className="fas fa-check-circle"></i></div>
                    <small className="text-muted">@ {post.handle} -{post.time} </small></span>
                    <p>{post.topic}</p>
                    
                    <div className="card border border-light mb-2" style={fullWidth}>
                          {displayTitle(post)}
                    </div>
                    
                    <div className="row text-muted">
                        <div className="col">
                          <i className="far fa-comment"></i> {post.reply}
                        </div>
                        <div className="col">
                          <i className="fas fa-retweet"></i> {post.retweet}
                        </div>
                        <div className="col">
                          <i className="far fa-heart"></i> {post.like}
                        </div>
                        <div className="col">
                          <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    
                      
                </div>

                      
            </div>
    );
}

export default PostItem;

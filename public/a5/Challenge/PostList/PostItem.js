import post from "./post.js";

const PostItem = (post) => {
    if (post.title === "") {
        return (`
            <div class="row align-items-start">
                <div class="col-1">
                    <img class="rounded-circle" src=${post.avatarIcon} width="40px" height="40px">
                </div>

                <div class="col-11">
                    <span><div>${post.username} <i class="fas fa-check-circle"></i></div>
                    <small class="text-muted">@ ${post.handle} -${post.time} </small></span>
                    <p>${post.topic}</p>
                    
                    <div class="card mb-2" style="width:100%;">
                          <img class="card-img-top rounded" src=${post.postImage} alt="Card image cap">             
                    </div>
                    
                    <div class="row text-muted">
                        <div class="col">
                          <i class="far fa-comment"></i> ${post.reply}
                        </div>
                        <div class="col">
                          <i class="fas fa-retweet"></i> ${post.retweet}
                        </div>
                        <div class="col">
                          <i class="far fa-heart"></i> ${post.like}
                        </div>
                        <div class="col">
                          <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    
                      
                </div>

                      
            </div>
        
        `)
    }
    return (`
            <div class="row align-items-start">
                <div class="col-1">
                    <img class="rounded-circle" src=${post.avatarIcon} width="40px" height="40px">
                </div>

                <div class="col-11">
                    <span><div>${post.username} <i class="fas fa-check-circle"></i></div>
                    <small class="text-muted">@ ${post.handle} -${post.time} </small></span>
                    <p>${post.topic}</p>
                    
                    <div class="card border border-light mb-2" style="width:100%;">
                          <img class="card-img-top rounded" src=${post.postImage} alt="Card image cap">
                          <div class="card-body border border-light">
                            <p class="card-text" style="font-weight: bold">${post.title}</p>
                            <p class="card-text text-muted">${post.content}</p>
                            <span class="text-muted"><i class="fas fa-link"></i>${post.link}</span>
                          </div>
                    </div>
                    
                    <div class="row text-muted">
                        <div class="col">
                          <i class="far fa-comment"></i> ${post.reply}
                        </div>
                        <div class="col">
                          <i class="fas fa-retweet"></i> ${post.retweet}
                        </div>
                        <div class="col">
                          <i class="far fa-heart"></i> ${post.like}
                        </div>
                        <div class="col">
                          <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    
                      
                </div>

                      
            </div>
    `);
}

export default PostItem;

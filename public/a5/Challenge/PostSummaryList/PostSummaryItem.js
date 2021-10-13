const PostSummaryItem = (post) => {
    return (`
        <div class="card" >
            <div class="row g-0 align-items-center">
                <div class="col-9">
                    
                        <p class="card-title"><small class="text-muted">${post.topic}</small></p>
                        <p class="card-title" style="font-weight: bold">${post.userName} <i class="fas fa-check-circle"></i><small class="text-muted"> -${post.time}</small></p>
                        <p class="card-text">${post.title}</p>
                    
                </div>
                <div class="col-3">
                    <div class="wd-post-image">
                      <img class="rounded card-img-center img-fluid" src=${post.image} width="60%">
                    </div>
                </div>
            </div>
        </div> 
    `)
}

export default PostSummaryItem;
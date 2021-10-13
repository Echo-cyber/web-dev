import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row mt-2">
                       <!-- search field and cog -->
                
            <div class="wd-search-bar">
    <div class="d-flex align-items-center justify-content-between">
        <div class="row height d-flex col-11 justify-content-center align-items-center">
                <div class="search"> <i class="fa fa-search"></i>
                    <input type="text" class="form-control" placeholder="Search Twitter">
                     </div>
        </div>
        <div class="d-flex col-1" style="color:white;font-size:20px"><i class="fas fa-cog"></i></div>
    </div>
    </div>            
                        
                        
 
           <ul class="nav ms-2 nav-tabs mt-2">
                      <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-sm-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
           </ul>
           <!-- image with overlaid text -->
           <img src="../../images/spaceX.png" class="img-fluid" alt="spacex">
           ${PostSummaryList()}
       </div>
    `);
}

export default ExploreComponent;

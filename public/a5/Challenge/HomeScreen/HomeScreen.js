import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList/index.js";


(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-12 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("Home")}
            </div>
            
            <div class="col-12 col-md-10 col-lg-7 col-xl-6">
                ${PostList()}
            </div>
                 
            <div class="col-12 col-lg-4 col-xl-4 d-sm-none d-md-none d-lg-block">
                ${PostSummaryList()}
            </div>

        </div>
    `);
})($);

const NavigationSidebar = () => {
    return(`
            <ul class="list-group mt-2">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
            <li class="list-group-item">
            
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="fas fa-home" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="../../Challenge/HomeScreen/index.html" class="text-decoration-none" style="color: white">Home</a>
            </span>

        </div>
    </li>

    <li class="list-group-item active">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="fas fa-hashtag" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="index.html" class="text-decoration-none" style="color: white">Explore</a>
            </span>

        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="fas fa-bell" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">Notifications</a>
            </span>

        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="far fa-envelope" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">Messages</a>
            </span>

        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="far fa-bookmark" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">Bookmarks</a>
            </span>

        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="fas fa-list" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">Lists</a>
            </span>

        </div>
    </li>


    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="fas fa-user-alt" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">Profile</a>
            </span>

        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <span class="fa-stack fa-2x" style="font-size: 8px; color: white">
               <i class="far fa-circle fa-stack-2x"></i>
              <i class="fas fa-ellipsis-h fa-stack-1x" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href="#" class="text-decoration-none" style="color: white">More</a>
            </span>
        </div>
    </li>
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

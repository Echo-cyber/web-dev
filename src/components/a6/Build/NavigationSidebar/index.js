import React from "react";

const NavigationSidebar = ({active}) => {
    const isActive = (active, path) => `list-group-item ${active === path ? 'active' : ''}`
    const halfSizeFont = {"fontSize": "0.5em"}
    return (
        <>
            <div className="list-group mt-2">

                <a className="list-group-item" href="#">
                    <i className="fab fa-twitter"/>
                </a>

                <a className={`list-group-item ${isActive(active, 'home')}`}
                   href="./HomeScreen/index.html">
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline">Home</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'explore')}`}
                   href="./ExploreScreen/index.html">
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'notifications')}`}
                   href="./ExploreScreen/index.html">
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'bookmarks')}`}
                   href="./ExploreScreen/index.html">
                    <i className="far fa-bookmark"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'lists')}`}
                   href="./ExploreScreen/index.html">
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'profile')}`}
                   href="./ExploreScreen/index.html">
                    <i className="fas fa-user-alt"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </a>

                <a className={`list-group-item ${isActive(active, 'more')}`}
                   href="./ExploreScreen/index.html">
                    <span className="fa-stack" style={halfSizeFont}>
                       <i className="far fa-circle fa-stack-2x"/>
                      <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"/>
                </span>
                    <span className="d-none d-xl-inline">More</span>
                </a>

            </div>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

        </>
    );
}

export default NavigationSidebar;

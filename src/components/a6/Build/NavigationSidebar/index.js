import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {
    const isActive = (active, path) => `list-group-item ${active === path ? 'active' : ''}`
    const halfSizeFont = {"fontSize": "0.5em"}
    return (
        <>
            <div className="list-group mt-2">

                <Link to="/a6/" className="list-group-item" >
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/a6/twitter/home" className={`list-group-item ${isActive(active, 'home')}`}
                >
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>

                <Link to="/a6/twitter/explore" className={`list-group-item ${isActive(active, 'explore')}`}
                   >
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>

                <Link to="#" className={`list-group-item ${isActive(active, 'notifications')}`}
                  >
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>

                <Link to="#" className={`list-group-item ${isActive(active, 'bookmarks')}`}
                   >
                    <i className="far fa-bookmark"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>

                <Link to="#" className={`list-group-item ${isActive(active, 'lists')}`}
                   >
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>

                <Link to="#" className={`list-group-item ${isActive(active, 'profile')}`}
                   >
                    <i className="fas fa-user-alt"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>

                <Link to="#" className={`list-group-item ${isActive(active, 'more')}`}
                   >
                    <span className="fa-stack" style={halfSizeFont}>
                       <i className="far fa-circle fa-stack-2x"/>
                      <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"/>
                </span>
                    <span className="d-none d-xl-inline">More</span>
                </Link>

            </div>

            <div className="d-grid mt-2">
                <Link href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>

        </>
    );
}

export default NavigationSidebar;

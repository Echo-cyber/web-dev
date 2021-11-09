import React from "react";
import {Link} from "react-router-dom";

const Assignment7Links = () => {
    return (
        <>
            <h1>Assignment7</h1>
            <li>
                <Link to="/a7/twitter/home">
                    HomeScreen Page
                </Link>
            </li>
            <li>
                <Link to="/a7/twitter/explore">
                    ExploreScreen Page
                </Link>
            </li>
            <li>
                <Link to="/a7/twitter/profile">
                    ProfileScreen Page
                </Link></li>
            <li>
                <Link to="/a7/practice">
                    Practice Page
                </Link></li>

        </>
    )
};

export default Assignment7Links;

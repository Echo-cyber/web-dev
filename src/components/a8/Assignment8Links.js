import React from "react";
import {Link} from "react-router-dom";

const Assignment8Links = () => {
    return (
        <>
            <h1>Assignment8</h1>
            <li>
                <Link to="/a8/twitter/home">
                    HomeScreen Page
                </Link>
            </li>
            <li>
                <Link to="/a8/twitter/profile">
                    ProfileScreen Page
                </Link></li>
            <li>
                <Link to="/a8/practice">
                    Practice Page
                </Link></li>

        </>
    )
};

export default Assignment8Links;

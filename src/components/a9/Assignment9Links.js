import React from "react";
import {Link} from "react-router-dom";

const Assignment9Links = () => {
    return (
        <>
            <h1>Assignment9</h1>
            <li>
                <Link to="/a9/twitter/home">
                    HomeScreen Page
                </Link>
            </li>

            <li>
                <Link to="/a9/twitter/profile">
                    ProfileScreen Page
                </Link>
            </li>

            <li>
                <Link to="/a9/twitter/explore">
                    ExploreScreen Page
                </Link>
            </li>

            <li>
            <Link to="/a9/practice">
                Practice Page
            </Link>
             </li>

        </>
    )
};

export default Assignment9Links;

import React from "react";
import {Link} from "react-router-dom";

const Assignment6Links = () => {
    return (
        <>
            <h1>Assignment6</h1>
            <li>
                <Link to="/a6/twitter/home">
                    HomeScreen Page
                </Link></li>
            <li>
                <Link to="/a6/twitter/explore">
                    ExploreScreen Page
                </Link></li>
            <li>
                <Link to="/a6/hello">
                    Hello Page
                </Link></li>
            <li>
                <Link to="/a6/practice">
                    Practice Page
                </Link></li>
            <li>
                <Link to="/a6/build">
                    Build Page
                </Link></li>

        </>
    )
};

export default Assignment6Links;

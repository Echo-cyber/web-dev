import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./RduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";


const Practice = () => {
    return (
        <>
        <h1>Practice</h1>
            <Link to="/a9/twitter">Twitter</Link>
            <Movies/>

        </>
    )
};

export default Practice;
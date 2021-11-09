import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./RduxExamples/components";


const Practice = () => {
    return (
        <>
        <h1>Practise</h1>
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>
        </>
    )
};

export default Practice;
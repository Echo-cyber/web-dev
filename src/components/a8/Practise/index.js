import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./RduxExamples/components";
import APIExamples from "./APIExamples";


const Practice = () => {
    return (
        <>
        <h1>Practise</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
            {/*<ReduxExamples/>*/}
        </>
    )
};

export default Practice;
import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import HelloWorld from "../HelloWorld";

const Practice = () => {
    return (
        <>
        <h1>Practise</h1>
            <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>
        </>
    )
};

export default Practice;
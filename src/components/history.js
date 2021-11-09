import Assignment6Links from "./a6/Assignment6Links";
import Assignment7Links from "./a7/Assignment7Links";

const History = () => {
    return (
    <div>
        <h2>Non React.js Assignment</h2>
        <h1>Assignment 2</h1>
        <ul>
            <li><a href="a2/practice/index.html">HTML Index</a></li>
            <li><a href="a2/twitter/navigation.html">Twitter clone</a></li>
            <li><a href="a2/practice/iframe/index.html">Iframe</a></li>
            <li><a href="a2/practice/svg/index.html">svg Index</a></li>
        </ul>

        <h1>Assignment 3</h1>
        <ul>
            <li><a href="a3/practice/css/index.html">CSS Index</a></li>
            <li><a href="a3/twitter/explore/explore.html">CSS Index-Explore Page</a></li>
            <li><a href="a3/twitter/bookmarks/bookmarks.html">Bookmarks Page</a></li>
            <li><a href="a3/challenge/index.html">Challenge page</a></li>
        </ul>

        <h1>Assignment 4</h1>
        <ul>
            <li><a href="a4/practice/bootstrap/index.html">Bootstrap Index</a></li>
            <li><a href="a4/twitter/explore/explore.html">Bootstrap Index-Twitter Page</a></li>
            <li><a href="a4/challenge/explore.html">Bootstrap Challenge-Twitter Page</a></li>
        </ul>

        <h1>Assignment 5</h1>
        <ul>
            <li><a href="a5/practice/js/index.html">Javascript Index-js part</a></li>
            <li><a href="a5/practice/todos/index.html">Javascript Index-todo part</a></li>
            <li><a href="a5/build/ExploreScreen/index.html">Javascript Index-ExploreScreen Page</a></li>
            <li><a href="/a5/Challenge/HomeScreen/index.html">Javascript Challenge-HomeScreen Page</a></li>
        </ul>

        <br/>
        <h2>React.js Assignment</h2>
        <Assignment6Links/>
        <Assignment7Links/>

    </div>
    )
}

export default History;
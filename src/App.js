import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import  Practice7 from "./components/a7/Practise/index";
import  Build7 from "./components/a7/Build/index";
import Practice6 from "./components/a6/Practise/index";
import Build6 from "./components/a6/Build/index";
import {BrowserRouter as NKO, Route} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import Assignment6Links from "./components/a6/Assignment6Links";
import History from "./components/history";

import Practice8 from "./components/a8/Practise/index";
import  Build8 from "./components/a8/Build/index";

import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./components/a7/Build/ProfileScreen";
import {Link} from "react-router-dom";
import A9 from "./components/a9/index"

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);


function App() {
  return (
      <NKO>
          <div className="container">
              <Link to="/a8/practice">A8</Link> |
              <Link to="/a9/practice">A9</Link>

              <Route path={["/","/assignment"]} exact={true}>
                  <History/>
              </Route>

          <Route path={"/a6/twitter/home"} exact={true}>
              <HomeScreen/>
          </Route>
          <Route path="/a6/twitter/explore" exact={true}>
                <ExploreScreen/>
          </Route>


          <Route path={"/a6"} exact={true}>
              <Assignment6Links/>
          </Route>
          <Route path="/a6/practice" exact={true}>
            <Practice6/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <Build6/>
          </Route>
          <Route path="/a6/hello" exact={true}>
              <HelloWorld/>
          </Route>

          <Route path={["/a7", "/a7/practice"]} exact={true}>
              <Practice7/>
          </Route>
          <Route path="/a7/twitter">
              <Build7/>
          </Route>

          <Route path={["/a8", "/a8/practice"]} exact={true}>
              <Practice8/>
          </Route>
              <Route path="/a8/twitter">
                  <Build8/>
              </Route>

              <Route path="/a9">
                  <A9/>
              </Route>



          </div>
      </NKO>
  );
}
export default App;

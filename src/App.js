import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practise/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import Assignment6Links from "./components/a6/Assignment6Links";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
          <Route path={"/a6/twitter/home"} exact={true}>
              <HomeScreen/>
          </Route>
          <Route path="/a6/twitter/explore" exact={true}>
                <ExploreScreen/>
          </Route>
          <Route path={["/", "/a6"]} exact={true}>
              <Assignment6Links/>
          </Route>
          <Route path="/a6/practice" exact={true}>
            <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <Build/>
          </Route>
          <Route path="/a6/hello" exact={true}>
              <HelloWorld/>
          </Route>
          </div>
      </BrowserRouter>
  );
}
export default App;

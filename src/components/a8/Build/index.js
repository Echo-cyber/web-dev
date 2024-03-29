import React from "react";
import tweets from "../../../reducers/tweets";
import who from "../../../reducers/who";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a8/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
                <Route path="/a8/twitter/profile" exact={true} render={(props) => <ProfileScreen
                    {...props}
                    isEdit={false}
                />}/>
            </div>
        </Provider>
    );
};
export default Build;
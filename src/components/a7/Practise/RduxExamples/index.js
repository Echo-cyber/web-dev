import React from "react";
import HelloReduxExampleComponent from "./components/HelloReduxExampleComponent";
import hello from "./reducers/hello";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(hello);
const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <HelloReduxExampleComponent/>
                </h2>
            </div>
        </Provider>
    )
}
export default ReduxExamples;
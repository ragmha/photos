import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={
      (
        createStoreWithMiddleware(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    }
  >
    <App />
  </Provider>,
  document.querySelector(".container")
);

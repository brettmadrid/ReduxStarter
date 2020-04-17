import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { titleReducer } from "./reducers/titleReducer";

import "./index.css";
import App from "./App";

const store = createStore(titleReducer);
console.log("store state", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

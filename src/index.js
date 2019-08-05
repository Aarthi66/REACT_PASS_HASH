import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./js/store/index";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { createStore, reducer } from "./redux";
import Provider from "./react-redux";

import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  rootElement
);

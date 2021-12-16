import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from './store/reducers';
import reducer from './store/reducers/auth';
import App from "./components/app";

import "./style/main.scss";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

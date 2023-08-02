import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { Provider } from "react-redux";
import reducer from "./reducer";

const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(reducer,middleware);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
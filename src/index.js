import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {blogs} from './redux/reducer';
import {createStore} from 'redux';
const data = createStore(blogs);

ReactDOM.render(
  <Provider store={data}>
    <BrowserRouter>
      <App name="ABCdd" lastname="xyz" title="qw" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

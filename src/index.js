import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults"
import SignupPage from "./signup/";
import registerServiceWorker from './registerServiceWorker';


const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <SignupPage onSubmit={showResults}/>
  </Provider>,
  rootEl
);
registerServiceWorker();

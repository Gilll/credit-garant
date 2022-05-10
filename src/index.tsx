import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

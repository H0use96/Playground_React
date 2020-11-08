import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Practice_Redux/Reducer/Reducer_Root";
import {Provider} from "react-redux";

import {logger} from "redux-logger";

// init store
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(

    // 전역으로 상태 관리를 위해, 최단에서 랩핑한다.
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);





import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { combineReducers,applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers(
    {
        counter: counterReducer,
        snapshots: snapshotsReducer,
    }
)
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

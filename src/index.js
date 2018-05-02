import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {combineReducers} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counterReducer';
import snapshotsReducer from './store/reducers/snapshotReducer';


const rootReducer = combineReducers(
    {
        counter:counterReducer,
        snapshots:snapshotsReducer,
    }
)
const store  = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
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

const logger = store => {

    return next => {

        return action => {

            console.log('[Middleware] Dispatching',action);

            const result = next(action);

            console.log('[Middleware] after Dispatching',store.getState());

            return result;

        }

    }

}

const enhanceComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(rootReducer,enhanceComposer(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

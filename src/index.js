import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import {multiClientMiddleware} from 'redux-axios-middleware';
// import auth_api from './axios/auth'
// import backend_api from './axios/backend_api'
import axios_init from './axios/axios_configurator'
import * as actions from "./store/actions";

// import listItemReducer from './store/reducers/listItem';
import authReducer from './store/reducers/auth';
import profileReducer from './store/reducers/profile';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

axios_init(store);
store.dispatch(actions.authCheckState());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
// ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// import listItemReducer from './store/reducers/listItem';
//
// const composeEnhancers = compose;
//
// const rootReducer = combineReducers({
//   listItem: listItemReducer,
// });
//
// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));
//
// // const store = createStore(listItemReducer)
//
// const app = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// ReactDOM.render( app, document.getElementById( 'root' ) );
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
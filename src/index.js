// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import {Provider} from 'react-redux';
import './index.css';


//createStore method is passed a reducer 

const store = createStore(shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//Store is passed to the App component as a prop 
ReactDOM.render(
    <Provider store ={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

//Provider allows for the access to the Redux store or 
//dispatch actions from any component

//Store is a creation that utilizes the createStore function and
//a reducer function

//Connect allows the store to map its data to the rest of the
//Redux components 

//Every button click dispatches an action to the store, causing it to change.

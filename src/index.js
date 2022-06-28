import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import store from './redux/store.js';
import {Provider} from 'react-redux';


import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
     <Provider store={store}>
     <App />
     </Provider>
/  </HashRouter>,
);


// let rerenderEntireTree =(state)=> {
// ReactDOM.render(
//   <HashRouter>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </HashRouter>,
//   document.getElementById('root')
// )
// }

// rerenderEntireTree(store.getState());

// store.subscribe(()=>{
//   let state=store.getState()
//   rerenderEntireTree(state)})
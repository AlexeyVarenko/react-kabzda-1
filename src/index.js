import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import  { Provider } from 'react-redux';


/*setInterval(() =>{
  store.dispatch({type:"FAKE"})
}, 1000)*/

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider >
    </React.StrictMode>,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
=======
import ThePlatform from './ThePlatform';
>>>>>>> 5b40fe20949608b5f46fea8936dd62f222c56221
import HomePage from './pages/home'
import * as serviceWorker from './serviceWorker';
import Article from './pages/article';
ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Article />
=======
    <ThePlatform />
>>>>>>> 5b40fe20949608b5f46fea8936dd62f222c56221
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

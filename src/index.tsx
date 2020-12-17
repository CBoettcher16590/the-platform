import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThePlatform from './ThePlatform';
<<<<<<< HEAD
import HomePage from './pages/home'
=======
>>>>>>> 87adde2bae23e0af36ee220be1ec2801bda5e505
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThePlatform />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

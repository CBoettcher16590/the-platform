import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';


class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{color: "red"}}>The Articles</h1>
        <p>Look what is featured</p>
        </div>
      );
    }
  }
  class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{backgroundColor: "lightblue"}}>More Articles!</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<MyHeader />, document.getElementById('root'));
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router';



function goBack(): string{

  let route = './forms/signup'

      return route
  

}

function App() {

  let history = useHistory();

  const redirect = () => {
    history.push(goBack())
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
<button onClick = {redirect}> Sign up!</button>
      </header>
    </div>
  );
}

export default App;

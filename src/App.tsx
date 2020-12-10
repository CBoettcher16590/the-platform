import React from 'react';
import { Button } from 'react-bootstrap';
import { Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import SignUp from './forms/signup'



function form(): string{

  let route = './forms/signup'

      return route
  

}

function App() {
  let history = useHistory();

  const redirect = () => {
    history.push(form())
  }
  return <>
    <div className="App">

    <Button  onClick = {redirect}  type = "submit" variant="danger" block > Sign Up!</Button> 

    </div>
  </>
}

export default App;

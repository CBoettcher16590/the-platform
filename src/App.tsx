import React from 'react';
<<<<<<< HEAD
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
=======
import { Alert, Button } from 'react-bootstrap';
import './App.css';
import SignUp from './forms/signup'
import { useHistory, Route, BrowserRouter } from 'react-router-dom';
import { Path } from 'typescript';


 function App() {
  const history = useHistory();


  return <>
<BrowserRouter>

    <div className="App">

   <Alert>
                <Alert.Heading>Welcome to The PlatForm !</Alert.Heading>
                <p>
                Enjoy Reading ! 
                </p>
            </Alert>
   <Route path="./forms/signup"></Route>
   <Button onClick = {() => history.push("/signup", { from: "forms" })} >Sign Up!!!</Button>


     
    </div>
    </BrowserRouter>

>>>>>>> ddffbe7a5884ccb5956cd59ce57839748ecde858
  </>
}

export default App;

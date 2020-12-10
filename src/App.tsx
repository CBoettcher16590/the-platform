import React from 'react';
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

  </>
}

export default App;

import React, { useState } from "react";
import '../pages/forms/style.css'
import { Button, Form } from "react-bootstrap";
import _SignUp from '../data/signUpHandeler';
import { useHistory } from "react-router";

interface IUserSignup {
    first_name?:string,
    last_name?:string,
    email?:string,
    password?:string
} 

export default function SignUp() {

    const history = useHistory();

    const signUpHandle = _SignUp();

    const [first_name, setFirst_name] = useState<string>();
    const [last_name, setLast_name] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function handelSignUp(e:any){
        e.preventDefault();
        // the ! will allow us to handel the "undefined error"
        signUpHandle._SignUp(first_name!, last_name!, email!, password!);
        history.push('/');
    }


    return <>

    <div className="loginSignupBackground">
        <div id="loginForm">
        <h1>Sign Up</h1> 
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                value={first_name}
                onChange={(e)=>setFirst_name(e.target.value)}
                type="text"
                className="form-control"
                placeholder="First name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    value={last_name}
                    onChange={(e)=>setLast_name(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"/>
            </Form.Group>
            <Button type="submit" className="btn btn-primary btn-block" onClick={handelSignUp}>
                Sign Up
            </Button>

<br/>
            <p className="forgot-password text-right">

                Sign Up As An Organization <a href="./Orgsignup">Sign Up!</a>
            </p>
            <p className="forgot-password text-right">
                Already registered? <a href="./signin">Sign In!</a>
            </p>
        </Form>
        </div>
    </div>
                
    
       





       
    </>

} 
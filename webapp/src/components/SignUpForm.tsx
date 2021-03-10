import React, { Component, useState } from "react";
import '../pages/forms/style.css'
import { Button } from "react-bootstrap";
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
        <form id="signForm">
            <h2>Sign Up</h2>

            <div className="form-group">
                <label>First name </label>
                <input
                    value={first_name}
                    onChange={(e)=>setFirst_name(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <br />

            <div className="form-group">
                <label>Last name </label>
                <input
                    value={last_name}
                    onChange={(e)=>setLast_name(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" />
            </div>
            <br />

            <div className="form-group">
                <label>Email </label>
                <input                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter email" />
            </div>
            <br />

            <div className="form-group">
                <label>Password </label>
                <input
                    value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <br />

            <Button type="submit" className="btn btn-primary btn-block" onClick={handelSignUp}>
                Sign Up
            </Button>
            <p className="forgot-password text-right">
                Already registered <a href="./signin">sign in?</a>
            </p>
        </form>
       
    </>

} 
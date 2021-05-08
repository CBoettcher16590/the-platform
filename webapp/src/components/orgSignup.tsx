import React, { Component, useState } from "react";
import '../pages/forms/styles.css'
import '../pages/forms/style.css'
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import _OrgSignUp from '../data/orgsignuphandler';
import { useHistory } from "react-router";


export default function OrgSignUp() {

    const history = useHistory();

    const signUpHandle = _OrgSignUp();

    const [org_name, setorg_name] = useState<string>();
    const [first_name, setFirst_name] = useState<string>();
    const [last_name, setLast_name] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function handelSignUp(e:any){
        e.preventDefault();
        // the ! will allow us to handel the "undefined error"
        signUpHandle._OrgSignUp(org_name!, first_name!, last_name!, email!, password!);
        history.push('/');
    }


    return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
    <div className="loginSignUpBackground">
        <div id="LoginForm">
        <h1>Sign Up As An Organization</h1> 
        <Form>
            <Form.Group>
                <Form.Label>Owner First Name</Form.Label>
                <Form.Control
                value={first_name}
                onChange={(e)=>setFirst_name(e.target.value)}
                type="text"
                className="form-control"
                placeholder=" First Name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label> Owner Last Name</Form.Label>
                <Form.Control
                value={last_name}
                onChange={(e)=>setLast_name(e.target.value)}
                type="text"
                className="form-control"
                placeholder=" Last Name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Organization Name</Form.Label>
                <Form.Control
                value={org_name}
                onChange={(e)=>setorg_name(e.target.value)}
                type="text"
                className="form-control"
                placeholder=" Organization Name"/>
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
            <Button type="submit" className="btn btn-primary btn-block" onClick= {handelSignUp}>
                Sign Up
            </Button>
            <p className="forgot-password text-right">
                Already registered? <a href="./signin">Sign In!</a>
            </p>
        </Form>
        </div>
    </div>
                
    
       





       
    </>

} 
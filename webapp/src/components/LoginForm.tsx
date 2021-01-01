import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAuthentication } from '../data/useAuthentication';

export default function LoginForm(){

    const authModel = useAuthentication();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    function handleLogin(e:any){
        e.preventDefault();
        authModel.login( email, password );
    }

    return <>
        <form id="signForm">
        <h2>Sign In</h2>

        <div className="form-group">
            <label>Email </label> 
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="emailInput" 
                type="email" className="form-control" placeholder="Enter email" />
        </div>
    <br/>
        <div className="form-group">
            <label>Password </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} 
                type="password" className="form-control" placeholder="Enter password" />
        </div>

        <Button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>
            Sign In
        </Button>

        <p className="forgot-password text-right">
            Forgot your Password ? <a href="forms/signin">Help</a>
        </p>
    </form>

    </>
}
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../api';


export default function LoginForm(){

    const history = useHistory();
    // const authModel = useAuthentication(); //we never get something back here or rather never a logged in
    const [isLoading, setLoading] = useState(false);

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    // This use effect is for the sign-in loading effect
    useEffect(() => {
        if (isLoading) {
          setTimeout(function(){
              setLoading(false);  
          }, 2000)
          };
        
  }, [ isLoading ]);
    
    function handleLogin(e:any){
        e.preventDefault();
        setLoading(true);
        api.tokens.post({_email:email , _password:password});
        api.user.post({email, password});
        setTimeout(function(){
            history.push('/');
        }, 2000);
       };

    

    return (
        <>
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

        <Button type="submit" disabled={isLoading} className="btn btn-primary btn-block" onClick={handleLogin}>
        {isLoading ? 'Loading…' : 'Sign In'}
        </Button>

        <p className="forgot-password text-right">
            Forgot your Password ? <a href="forms/signin">Help</a>
        </p>
    </form>
        </>
    )
}
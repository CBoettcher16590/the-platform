import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IUser } from '../../../services/crud-server/src/models/user';
import api from '../api';


export default function LoginForm(){

    const history = useHistory();
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
        api.users.get().then((responce) => {
            const foundUser:IUser[] = responce.data.filter((_user:IUser) => _user.email === `${email}`);
            
            if(foundUser[0].disable_login === 0){
                api.tokens.post({_email:email , _password:password});
                api.user.post({email, password});
                setTimeout(function(){
                    history.push('/');
                }, 2000);
            } else{
                alert("Your Account Has Been Temporarily Disabled");
            }
        });

        api.orgs.get().then((responce) => {
            const foundUser:IUser[] = responce.data.filter((_user:IUser) => _user.email === `${email}`);
            
            if(foundUser[0].disable_login === 0){
                api.tokens.post({_email:email , _password:password});
                api.org.post({email, password});
                setTimeout(function(){
                    history.push('/');
                }, 2000);
            } else{
                alert("Your Account Has Been Temporarily Disabled");
            }
        });

   
       };

    

    return (
        <>
    <div className="loginSignupBackground">
        <div id="loginForm">
        <h1>Log In</h1>

        <Form > 
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        id="emailInput" 
                        type="email"
                        className="form-control"
                        placeholder="Enter email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </Form.Group>
                <Button type="submit" disabled={isLoading} className="btn btn-primarys btn-block" onClick={handleLogin}>
                    {isLoading ? 'Loading…' : 'Sign In'}
                </Button>
                <a href="#">Forgot Your Password?</a>
            </Form>
            <hr/>
            <div className="createAccount">
                <h4>Dont have an Account Yet?</h4>
                <a href="/signup">Create an Account</a>

            </div>

        </div>

    </div>
    
        
        </>
    )
}
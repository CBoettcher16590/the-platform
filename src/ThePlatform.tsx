import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SignUp from './forms/signup';
import Login from './forms/signin';


export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={Login} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            </div>
    );

}
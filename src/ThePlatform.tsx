import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../the-platform/src/pages/home';
import SignUp from '../../the-platform/src/pages/forms/signup';
import Login from '../../the-platform/src/pages/forms/signin';
import profile from '../../the-platform/src/pages/member-profile';



export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={Login} />
                    <Route path="/profile" component={profile} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            </div>
    );

}
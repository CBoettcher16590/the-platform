import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../the-platform/src/pages/home';
import SignUp from '../../the-platform/src/pages/forms/signup';
import Login from '../../the-platform/src/pages/forms/signin';
import profile from './pages/members/member-profile';
<<<<<<< HEAD
import adminHome from '../../the-platform/src/systemAdmin/homepage';
import Editors from './pages/editors';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import EditorPending from './pages/editorPending';
=======
import adminHome from '../../the-platform/src/systemAdmin/homepage'
import favorite from './pages/members/favorite';
import purchased from './pages/members/purchased';
import Admin_profile from './systemAdmin/profile';
import memberHome from './pages/members/homepage';
import authorHome from './author/homepage';
import author_profile from './author/profile';

>>>>>>> d1a68868377a9bb9bb941e85c130833cd8a77bd0

export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/editorPending" component={EditorPending} />
                    <Route path="/editors" component={Editors} />
                    <Route path="/adminHome" component={adminHome} />
                    <Route path="/memberHome" component={memberHome} />
                    <Route path="/authorHome" component={authorHome} />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={Login} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/profile" component={profile} />
                    <Route path="/profileFavorite" component= {favorite} />
                    <Route path="/profilePurchased" component= {purchased} />
                    <Route path="/ADProfile" component={Admin_profile} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            </div>
    );

}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../the-platform/src/pages/home';
import SignUp from '../../the-platform/src/pages/forms/signup';
import Login from '../../the-platform/src/pages/forms/signin';
import profile from './pages/members/member-profile';
import adminHome from '../../the-platform/src/systemAdmin/homepage'
import Article from './pages/article';
import favorite from './pages/members/favorite';
import purchased from './pages/members/purchased';
import Admin_profile from './systemAdmin/profile';
import memberHome from './pages/members/homepage';
import authorHome from './author/homepage';
import author_profile from './author/profile';
import OrganizationHome from './organization/homepage'; 
import reported_articles from './systemAdmin/reportedArticles';
import Organization_profile from './organization/profile';


export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/adminHome" component={adminHome} />
                    <Route path="/memberHome" component={memberHome} />
                    <Route path="/authorHome" component={authorHome} />
                    <Route path="/OrgHome" component={OrganizationHome} />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/RepArticles" component={reported_articles} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/profile" component={profile} />
                    <Route path="/article" component={Article} />
                    <Route path="/profileFavorite" component= {favorite} />
                    <Route path="/profilePurchased" component= {purchased} />
                    <Route path="/ADProfile" component={Admin_profile} />
                    <Route path="/orgProfile" component={Organization_profile} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            </div>
    );

}
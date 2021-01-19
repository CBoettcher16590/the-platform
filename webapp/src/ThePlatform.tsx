import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SignUp from './pages/forms/signup';
import Login from './pages/forms/signin';
import profile from './pages/members/member-profile';
import adminHome from './pages/systemAdmin/homepage'
import SubmitArticle from './pages/submitArticle'
import IndvArticlePage from './pages/indvArticle';
import Admin_profile from './pages/systemAdmin/profile';
import authorHome from './pages/author/homepage';
import author_profile from './pages/author/profile';
import my_articles from './pages/author/myArticles';
import AU_personal_info from './pages/author/personalInfo';
import AU_edit_profile from './pages/author/editprofile';
import ED_edit_profile from './pages/editor/editprofile';
import OR_edit_profile from './pages/organization/editprofile';
import OR_personal_info from './pages/organization/personalInfo';
import MEM_edit_profile from './pages/members/editprofile';
import MEM_personal_info from './pages/members/personalInfo';
import AD_edit_profile from './pages/systemAdmin/editprofile';
import AD_personal_info from './pages/systemAdmin/personalInfo';
import EditorProfile from './pages/editor/editorProfile';
import OrganizationHome from './pages/organization/homepage';
import Organization_profile from './pages/organization/profile';

export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    {/* Editor Routes */}
                    <Route path="/editorProfile" component={EditorProfile} />

                    <Route path="/EDupdateInfo" component={ED_edit_profile} />
                    {/* Admin Routes */}
                    <Route path="/ADProfile" component={Admin_profile} />
                    <Route path="/adminHome" component={adminHome} />
                    <Route path="/ADupdateMyInfo" component={AD_edit_profile} />
                    <Route path="/ADupdatePersInfo" component={AD_personal_info} />

                    {/* Member Routes */}
                    <Route path="/profile" component={profile} />
                    <Route path="/MEMupdateMyInfo" component={MEM_edit_profile} />
                    <Route path="/MEMupdatePersInfo" component={MEM_personal_info} />

                    {/* Article/Author Routes */}
                    <Route path="/article/:id" exact component={IndvArticlePage} />
                    <Route path="/authorHome" component={authorHome} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
                    <Route path="/AUupdatePersInfo" component={AU_personal_info} />
                    <Route path="/newArticle" component={SubmitArticle} />

                    {/* ORG Routes */}
                    <Route path="/OrgHome" component={OrganizationHome} />
                    <Route path="/ORupdateMyInfo" component={OR_edit_profile} />
                    <Route path="/ORupdatePersInfo" component={OR_personal_info} />
                    <Route path="/orgProfile" component={Organization_profile} />

                    {/* Misc */}
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />

                    <Route path="/" component={HomePage} />

                </Switch>
            </BrowserRouter>
            </div>
    );

}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SignUp from './pages/forms/signup';
import Login from './pages/forms/signin';
import profile from './pages/members/member-profile';
import adminHome from './systemAdmin/homepage'
import SubmitArticle from './pages/submitArticle'
import Article from './pages/article';
import favorite from './pages/members/favorite';
import purchased from './pages/members/purchased';
import Admin_profile from './systemAdmin/profile';
import memberHome from './pages/members/homepage';
import authorHome from './author/homepage';
import author_profile from './author/profile';
import pending from './editor/pending'
import my_articles from './author/myArticles';
import AU_personal_info from './author/personalInfo';
import AU_edit_profile from './author/editprofile';
import ED_edit_profile from './editor/editprofile';
import ED_personal_info from './editor/personalInfo';
import OR_edit_profile from './organization/editprofile';
import OR_personal_info from './organization/personalInfo';
import MEM_edit_profile from './pages/members/editprofile';
import MEM_personal_info from './pages/members/personalInfo';
import AD_edit_profile from './systemAdmin/editprofile';
import AD_personal_info from './systemAdmin/personalInfo';
import mostRecentArcticles from './pages/members/mostRecentArcticles';
import EditorProfile from './editor/editorProfile';
import Editor from './editor/editors';
import reported_articles from './systemAdmin/reportedArticles';
import users from './systemAdmin/users';
import OrganizationHome from './organization/homepage';
import Organization_profile from './organization/profile';


export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    {/* Editor Routes */}
                    <Route path="/editor" component={Editor} />
                    <Route path="/editorProfile" component={EditorProfile} />
                    <Route path="/pendingArticles" component={pending} />
                    <Route path="/reportedArticles" component={reported_articles} />

                    <Route path="/EDupdateMyInfo" component={ED_edit_profile} />
                    <Route path="/EDupdatePersInfo" component={ED_personal_info} />

                    {/* Admin Routes */}
                    <Route path="/ADProfile" component={Admin_profile} />
                    <Route path="/adminHome" component={adminHome} />
                    <Route path="/ADupdateMyInfo" component={AD_edit_profile} />
                    <Route path="/ADupdatePersInfo" component={AD_personal_info} />

                    {/* Member Routes */}
                    <Route path="/memberHome" component={memberHome} />
                    <Route path="/profile" component={profile} />
                    <Route path="/MEMupdateMyInfo" component={MEM_edit_profile} />
                    <Route path="/MEMupdatePersInfo" component={MEM_personal_info} />

                    {/* Article/Author Routes */}
                    <Route path="/article" component={Article} />
                    <Route path="/authorHome" component={authorHome} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
                    <Route path="/AUupdatePersInfo" component={AU_personal_info} />
                    <Route path="/newArticle" component={SubmitArticle} />
                    <Route path="/authorArticles" component={my_articles} />


                    {/* ORG Routes */}
                    <Route path="/OrgHome" component={OrganizationHome} />
                    <Route path="/ORupdateMyInfo" component={OR_edit_profile} />
                    <Route path="/ORupdatePersInfo" component={OR_personal_info} />
                    <Route path="/orgProfile" component={Organization_profile} />

                    {/* Misc */}
                    <Route path="/users" component={users} /> 

                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />


                    <Route path="/recentar" component={mostRecentArcticles} />
                    <Route path="/profileFavorite" component= {favorite} />
                    <Route path="/profilePurchased" component= {purchased} />

                    <Route path="/" component={HomePage} />

                </Switch>
            </BrowserRouter>
            </div>
    );

}

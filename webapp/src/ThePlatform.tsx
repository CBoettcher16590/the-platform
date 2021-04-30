import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SignUp from './pages/forms/signup';
import Login from './pages/forms/signin';
import Profile from './pages/members/member-profile';
import SubmitArticle from './pages/submitArticle'
import IndvArticlePage from './pages/indvArticle';
import Admin_profile from './pages/systemAdmin/profile';
import AuthorProfile from './pages/author/profile';
import AU_edit_profile from './pages/author/editprofile';
import ED_edit_profile from './pages/editor/editprofile';
import OR_edit_profile from './pages/OrgAdmin/editprofile';
import OrgAuthors from './pages/OrgAdmin/OrgAuthors';
import OR_personal_info from './pages/OrgAdmin/personalInfo';
import MEM_edit_profile from './pages/members/editprofile';
import MEM_personal_info from './pages/members/personalInfo';
import AD_edit_profile from './pages/systemAdmin/editprofile';
import EditorProfile from './pages/editor/editorProfile';
import OrganizationHome from './pages/organization/homepage';
import Organization_profile from './pages/OrgAdmin/profile';
import OrgArticles from './pages/organization/orgArticles';
import SeriesPage from './pages/series/seriesPage';
import SubmitSeries from './pages/series/newSeries';
import Subscription from './pages/subscriptions/subscription'

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
                    <Route path="/ADupdateMyInfo" component={AD_edit_profile} />

                    {/* Member Routes */}
                    <Route path="/profile" component={Profile} />
                    <Route path="/MEMupdateMyInfo" component={MEM_edit_profile} />
                    <Route path="/MEMPersInfo" component={MEM_personal_info} />

                    {/* Article/Author Routes */}
                    <Route path="/article/:id" exact component={IndvArticlePage} />
                    <Route path="/AUprofile" component={AuthorProfile} />
                    <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
                    <Route path="/newArticle" component={SubmitArticle} />
                    <Route path="/series/:id" component={SeriesPage} />
                    <Route path="/newSeries" component={SubmitSeries} />

                    {/* ORG Routes */}
                    <Route path="/OrgHome" component={OrganizationHome} />
                    <Route path="/ORupdateMyInfo" component={OR_edit_profile} />
                    <Route path="/OrgArticles" component={OrgArticles} />
                    <Route path="/ORupdatePersInfo" component={OR_personal_info} />
                    <Route path="/Orgauthors" component={OrgAuthors} />
                    <Route path="/orgProfile" component={Organization_profile} />

                    {/* Misc */}
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />

                    <Route path="/subscription" component={Subscription} />

                    <Route path="/" component={HomePage} />

                </Switch>
            </BrowserRouter>
            </div>
    );

}

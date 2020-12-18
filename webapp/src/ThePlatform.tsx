import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../the-platform/src/pages/home';
import SignUp from '../../the-platform/src/pages/forms/signup';
import Login from '../../the-platform/src/pages/forms/signin';
import profile from './pages/members/member-profile';
import adminHome from '../../the-platform/src/systemAdmin/homepage'
import SubmitArticle from './pages/submitArticle'
import Article from './pages/article';
import favorite from './pages/members/favorite';
import purchased from './pages/members/purchased';
import Admin_profile from './systemAdmin/profile';
import memberHome from './pages/members/homepage';
import authorHome from './author/homepage';
import author_profile from './author/profile';
import pending from './editor/pending'
import Rejected from './editor/rejected';
import my_articles from './author/myArticles';
import edit_profile from './pages/members/editprofile';
import personal_info from './pages/members/personalInfo';
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
import freeToRead from './pages/members/freeToRead';
import mostRecentArcticles from './pages/members/mostRecentArcticles';
import EditorProfile from './editor/editorProfile';
import Editor from './editor/editors';
import reported_articles from './systemAdmin/reportedArticles';
import reported_reviews from './systemAdmin/reportedReviews';
import users from './systemAdmin/users';
import OrganizationHome from './organization/homepage';
import Organization_profile from './organization/profile';


export default function ThePlatform( props:{} ){

    return (
            <div>
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/editorPending" component={EditorPending} /> */}
                    <Route path="/editors" component={Editor} />
                    <Route path="/users" component={users} />
                    <Route path="/reportedReviews" component={reported_reviews} />
                    <Route path="/reportedArticles" component={reported_articles} />
                    <Route path="/editorProfile" component={EditorProfile} />
                    <Route path="/adminHome" component={adminHome} />
                    <Route path="/memberHome" component={memberHome} />
                    <Route path="/authorHome" component={authorHome} />
                    <Route path="/OrgHome" component={OrganizationHome} />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/pendingArticles" component={pending} />
                    <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
                    <Route path="/AUupdatePersInfo" component={AU_personal_info} />
                    <Route path="/EDupdateMyInfo" component={ED_edit_profile} />
                    <Route path="/EDupdatePersInfo" component={ED_personal_info} />
                    <Route path="/ORupdateMyInfo" component={OR_edit_profile} />
                    <Route path="/ORupdatePersInfo" component={OR_personal_info} />
                    <Route path="/MEMupdateMyInfo" component={MEM_edit_profile} />
                    <Route path="/MEMupdatePersInfo" component={MEM_personal_info} />
                    <Route path="/ADupdateMyInfo" component={AD_edit_profile} />
                    <Route path="/ADupdatePersInfo" component={AD_personal_info} />
                    <Route path="/authorArticles" component={my_articles} />
                    <Route path="/rejectedArticles" component={Rejected} />
                    <Route path="/RepArticles" component={reported_articles} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/profile" component={profile} />
                    <Route path="/article" component={Article} />
                    <Route path="/freetoread" component={freeToRead} />
                    <Route path="/recentar" component={mostRecentArcticles} />
                    <Route path="/AUprofile" component={author_profile} />
                    <Route path="/profile" component={profile} />
                    <Route path="/article" component={Article} />
                    <Route path="/newArticle" component={SubmitArticle} />
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

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
import Mem_edit_profile from './pages/members/editprofile';
import AD_edit_profile from './pages/systemAdmin/editprofile';
import EditorProfile from './pages/editor/editorProfile';
import SeriesPage from './pages/series/seriesPage';
import SubmitSeries from './pages/series/newSeries';
import Subscription from './pages/subscriptions/subscription'
import SubscriptionPlan from './pages/subscriptions/subscriptionPlan'
import CheckoutFormMonth from './pages/subscriptions/checkoutformMonth'
import CheckoutFormYear from './pages/subscriptions/checkoutformYear'
import OrganizationAd_profile from './pages/OrgAdmin/profile';
import OrgAd_profile from './pages/OrgAdmin/profile';
import ORG_Ad_edit_profile from './pages/OrgAdmin/editprofile';
import Org_profile from './pages/organization/profile';
import org_edit_profile from './pages/organization/editprofile';
import OrgSignUp from './components/orgSignup';
import OrgautherEdit from './pages/orgAuthors/editprofile';
import OrgAuthorProfile from './pages/orgAuthors/profile';



export default function ThePlatform(props: {}) {

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
                    <Route path="/profileEdit" component={Mem_edit_profile} />


                    {/* Article/Author Routes */}
                    <Route path="/article/:id" exact component={IndvArticlePage} />
                    <Route path="/AUprofile" component={AuthorProfile} />
                    <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
                    <Route path="/newArticle" component={SubmitArticle} />
                    <Route path="/series/:id" component={SeriesPage} />
                    <Route path="/newSeries" component={SubmitSeries} />

                    {/* ORG Routes */}

                    <Route path="/orgProfile" component={Org_profile} /> 
                    <Route path="/orgpersonalinfo" component={org_edit_profile}/>

                    {/* ORG Admin */}
                    <Route path="/orgAdminProfile" component={OrgAd_profile} /> 
                    <Route path="/ORAdUpdate" component={ORG_Ad_edit_profile}/>

                    {/* ORG Author */}
                    <Route path="/orgAuthProfile" component={OrgAuthorProfile} /> 
                    <Route path="/ORAUthUpdate" component={OrgautherEdit}/>

                    {/* Misc */}
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/Orgsignup" component={OrgSignUp}/>

                    <Route path="/subscription" component={Subscription} />
                    <Route path="/plans" component={SubscriptionPlan} />
                    
                    <Route path="/checkout" component={CheckoutFormMonth} />
                    <Route path="/_checkout" component={CheckoutFormYear} />


                    <Route path="/" component={HomePage} />

                </Switch>
            </BrowserRouter>
        </div>



    );

}

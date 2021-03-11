import React from 'react';
import { assert, expect } from 'chai';
import ThePlatform from '../ThePlatform';
import { mount } from 'enzyme';



describe('Integration Testing', () => {

 const wrapper = mount(<ThePlatform />);

    it("should full render the app?", ()=> {

        wrapper.find('editorProfile'); //we find them all and basically test some aspects of them probably....
        //not sure it's testing correctly until I run it through some more cases.




    })
})



// <Route path="/editorProfile" component={EditorProfile} />
// <Route path="/EDupdateInfo" component={ED_edit_profile} />

// {/* Admin Routes */}
// <Route path="/ADProfile" component={Admin_profile} />
// <Route path="/ADupdateMyInfo" component={AD_edit_profile} />

// {/* Member Routes */}
// <Route path="/profile" component={Profile} />
// <Route path="/MEMupdateMyInfo" component={MEM_edit_profile} />
// <Route path="/MEMPersInfo" component={MEM_personal_info} />

// {/* Article/Author Routes */}
// <Route path="/article/:id" exact component={IndvArticlePage} />
// <Route path="/AUprofile" component={author_profile} />
// <Route path="/AUupdateMyInfo" component={AU_edit_profile} />
// <Route path="/newArticle" component={SubmitArticle} />

// {/* ORG Routes */}
// <Route path="/OrgHome" component={OrganizationHome} />
// <Route path="/ORupdateMyInfo" component={OR_edit_profile} />
// <Route path="/ORupdatePersInfo" component={OR_personal_info} />
// <Route path="/orgProfile" component={Organization_profile} />

// {/* Misc */}
// <Route path="/signin" component={Login} />
// <Route path="/signup" component={SignUp} />

// <Route path="/" component={HomePage} />

// */
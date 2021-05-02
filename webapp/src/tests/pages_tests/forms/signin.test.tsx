import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Login from '../../../pages/forms/signin';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<Login />', () => {

//renders
    it('ED_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('EditorProfile mounts component without crashing', () => {

        const wrapper = mount(<Login />);
        expect(wrapper.find(Login)).to.have.lengthOf(1);
    });

//exists
    it('Au EditorProfile profile renders', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
// import { useAuthentication } from '../../data/useAuthentication';
import LoginForm from '../../components/LoginForm'



export default function Login() {

    return <>
    <MainLayout>

      <LoginForm/>
        
    </MainLayout>
            
       </>
    }

//This maybe bad code (but maybe a start)
// function SignInDirect(_logInID: any){
//   const [author, editor ] = useState(null);
  
//   useEffect(() => {
//     function logInStatus(status){
//       directUser(status.logIn);
//     }
// UserDirectAPI.logInHomepage(id,directProfile);
// return () =>{

// };


//   });
//   return EditorProfile;
// }
*/
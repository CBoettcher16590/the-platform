import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Login from '../../../pages/forms/signup';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<SignUpPage />', () => {

//renders
    it('SignUpPage renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('SignUpPage mounts component without crashing', () => {

        const wrapper = mount(<Login />);
        expect(wrapper.find(Login)).to.have.lengthOf(1);
    });

//exists
    it('Au SignUpPage profile renders', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SignUp from '../../components/SignUpForm';
import './style.css'




export default function SignUpPage() {


    return <>
   <MainLayout>
        
        <SignUp/>

    </MainLayout>
       
    </>

}
*/
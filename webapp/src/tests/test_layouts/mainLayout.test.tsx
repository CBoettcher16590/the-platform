import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import MainLayout from '../../layouts/MainLayout';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<HorazontalDisplay />', () => {

//renders
    it('HorazontalDisplay renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainLayout />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('HorazontalDisplay mounts component without crashing', () => {

        const wrapper = mount(<MainLayout />);
        expect(wrapper.find(MainLayout)).to.have.lengthOf(1);
    });

//exists
    it('HorazontalDisplay profile renders', () => {
        const wrapper = shallow(<MainLayout />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})



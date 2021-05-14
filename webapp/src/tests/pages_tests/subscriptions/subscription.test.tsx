import Subscription from '../../../pages/subscriptions/subscription'
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<Subscription />', () => {

//renders
    it('Subscription renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Subscription />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('OrganizationHome mounts component without crashing', () => {

        const wrapper = mount(<Subscription />);
        expect(wrapper.find(Subscription)).to.have.lengthOf(1);
    });

//exists
    it('OrganizationHome  renders', () => {
        const wrapper = shallow(<Subscription />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

import React from 'react';
import CheckoutFormMonth from '../../../pages/subscriptions/checkoutformMonth'
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<CheckoutFormMonth />', () => {

//renders
    it('CheckoutFormMonth renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CheckoutFormMonth />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('CheckoutFormMonth mounts component without crashing', () => {

        const wrapper = mount(<CheckoutFormMonth />);
        expect(wrapper.find(CheckoutFormMonth)).to.have.lengthOf(1);
    });

//exists
    it('CheckoutFormMonth  renders', () => {
        const wrapper = shallow(<CheckoutFormMonth />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

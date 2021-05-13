import CheckoutFormYear from '../../../pages/subscriptions/checkoutformYear'
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<CheckoutFormYear />', () => {

//renders
    it('CheckoutFormYear renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CheckoutFormYear />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('CheckoutFormYear mounts component without crashing', () => {

        const wrapper = mount(<CheckoutFormYear />);
        expect(wrapper.find(CheckoutFormYear)).to.have.lengthOf(1);
    });

//exists
    it('CheckoutFormYear  renders', () => {
        const wrapper = shallow(<CheckoutFormYear />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

import SubscriptionPlan from '../../../pages/subscriptions/subscriptionPlan'
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Im6u3JQKiiOEQTIDHIIljaL0YS7CGvSKB9oOpFHF0jxdpSPRAVVPvJOLqq4uXe9kTh7GToiomCtLAgF1W06d84i00u2OkaPCB');
        



describe('<SubscriptionPlan />', () => {



//     const wrapper = mount(<Elements stripe={stripePromise}  />  </Elements>);

//     <Elements stripe={stripePromise}>
//     <ThePlatform />
//   </Elements>



//renders
    it('SubscriptionPlan renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SubscriptionPlan />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('OrganizationHome mounts component without crashing', () => {

        const wrapper = mount(<SubscriptionPlan />);
        expect(wrapper.find(SubscriptionPlan)).to.have.lengthOf(1);
    });

//exists
    it('OrganizationHome  renders', () => {
        const wrapper = shallow(<SubscriptionPlan />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

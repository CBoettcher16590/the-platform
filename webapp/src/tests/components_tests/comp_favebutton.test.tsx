import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import PayButton from '../../components/FavButton';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<PayButton />', () => {

//renders
    it('PayButton renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PayButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('PayButton mounts component without crashing', () => {

        const wrapper = mount(<PayButton />);
        expect(wrapper.find(PayButton)).to.have.lengthOf(1);
    });

//exists
    it(' PayButton profile renders', () => {
        const wrapper = shallow(<PayButton />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})



/*
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
    }
         
export default function PayButton() {
   const [isLoading, setLoading] = useState(false);
         
           useEffect(() => {
             if (isLoading) {
               simulateNetworkRequest().then(() => {
                
                 setLoading(false);
});
}
}, [ isLoading ]);
         
    const handleClick = () => setLoading(true);
         
    return (
             <Button
             
               variant="primary"
               disabled={isLoading}
               onClick={handleClick}
             >
               {isLoading ? 'Loading…' : 'Add To Favorites'}
             </Button>
);
}
         
*/
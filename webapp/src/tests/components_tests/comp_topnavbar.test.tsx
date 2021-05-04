import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import TopNavbar from '../../components/TopNavbar';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<TopNavbar />', () => {

//renders
    it('TopNavbar renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopNavbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('TopNavbar mounts component without crashing', () => {

        const wrapper = mount(<TopNavbar />);
        expect(wrapper.find(TopNavbar)).to.have.lengthOf(1);
    });

//exists
    it(' Footer profile renders', () => {
        const wrapper = shallow(<TopNavbar />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function TopNavbar( props:{} ){



    return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
            </>;

}
*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import AU_edit_profile from '../../../pages/author/editprofile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<AU_edit_profile />', () => {

//renders
    it('AU_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AU_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('AU_edit_profile mounts component without crashing', () => {

        const wrapper = mount(<AU_edit_profile />);
        expect(wrapper.find(AU_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('AU_edit_profile profile renders', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

    //these 2 are slightly more advaned searching out components. wrapper.have.text maybe a neat one to look
//important text.
    it('renders three <AU_edit_profile /> components', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper.find('h2')).to.have.lengthOf(1)

        expect(
            wrapper.containsMatchingElement(
                <h2> Change Profile Information</h2>
            )
          ).to.be.true

    });

//grabbing the core <div out.>
    it('renders five <AU_edit_profile /> form group components', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper.find('div')).to.have.lengthOf(1) //multiple attempts made via mount to get to lower level components, not functional
        // console.log(wrapper.debug())

    });
})












/*

import React from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AU_edit_profile() {
    return <>
    <div>
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href= '/editorProfile'>My Account</Nav.Link>
            </Nav>
        </Navbar>

        <h2> Change Profile Information</h2>
        <Form style= {{alignContent: "normal"}}>
    <Form.Group as={Row} >
        <Form.Label column sm={10}>
            Profile Picture
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="Number"placeholder="Enter New Image URL" />
        </Col>
    </Form.Group>

    <Form.Group as={Row} >
        <Form.Label column sm={10}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="Number"  placeholder="New Email" />
        </Col>
    </Form.Group>

    <Form.Group as={Row} >
        <Form.Label column sm={10}>
            Phone
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="Number"  placeholder="New Phone Number" />
        </Col>
    </Form.Group>

    <Form.Group as={Row} >
        <Form.Label column sm={10}>
            Birthdate
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="date" placeholder="BirthDate" />
        </Col>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>About Me: </Form.Label>
        <Form.Control
        maxLength = {100}
        as="textarea" rows={3} />
    </Form.Group>
<Button>Update</Button>

</Form>
        <br/>
        <Nav.Link href= '/EDupdateInfo' > Personal Information Settings</Nav.Link>
    </div>

</>
}
*/

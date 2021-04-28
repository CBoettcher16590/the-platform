import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import OR_edit_profile from '../../../pages/organization/editprofile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<OR_edit_profile />', () => {

//renders
    it('OR_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OR_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('OR_edit_profile mounts component without crashing', () => {

        const wrapper = mount(<OR_edit_profile />);
        expect(wrapper.find(OR_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('OR_edit_profile profile renders', () => {
        const wrapper = shallow(<OR_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function OR_edit_profile() {
return <>
<div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link href= "/OrgHome">My Account</Nav.Link>
</Nav>
</Navbar>
<br />
<h6> Change profile Information</h6>
    <Form style= {{alignContent: "normal"}}>
    <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Change Profile Photo" />
</Form.Group>
<Row>
<Col>
    <Form.Control placeholder="First name" />
</Col>
<Col>
    <Form.Control placeholder="Last name" />
</Col>
</Row>
<br/>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>About Me: </Form.Label>
    <Form.Control 
    maxLength = {100}
    as="textarea" rows={3} />
</Form.Group>
<Button>Update</Button>

</Form>
<br/>
    <Nav.Link href= '/ORupdatePersInfo' > Personal Information Settings</Nav.Link>
</div>

</>
}
*/

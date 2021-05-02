import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import AD_edit_profile from '../../../pages/systemAdmin/editprofile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<AD_edit_profile />', () => {

//renders
    it('AD_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AD_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('AD_edit_profile mounts component without crashing', () => {

        const wrapper = mount(<AD_edit_profile />);
        expect(wrapper.find(AD_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('AD_edit_profile profile renders', () => {
        const wrapper = shallow(<AD_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@material-ui/core';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

export default function AD_edit_profile() {

    
return <>
<div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link href= '/ADProfile'>My Account</Nav.Link>
</Nav>
</Navbar>
<br />
<h2> Change profile Information</h2>
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
    <Nav.Link href= '/ADupdateMyInfo' > Personal Information Settings</Nav.Link>
</div>

</>

}
*/
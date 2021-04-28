import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import OR_personal_info from '../../../pages/organization/personalInfo';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<OR_personal_info />', () => {

//renders
    it('OR_personal_info renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OR_personal_info />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('OR_personal_info mounts component without crashing', () => {

        const wrapper = mount(<OR_personal_info />);
        expect(wrapper.find(OR_personal_info)).to.have.lengthOf(1);
    });

//exists
    it('OR_personal_info profile renders', () => {
        const wrapper = shallow(<OR_personal_info />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';




export default function OR_personal_info() {


    return <>
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href= "/OrgHome">My Account</Nav.Link>
                </Nav>
            </Navbar>
        </div>
        <Form>
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="New Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
      Phone
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="Number" maxLength= {10} placeholder="New Phone Number" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
      Gender
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" maxLength= {1} placeholder="Enter Only F or M" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
      BirthDate
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date"  placeholder="BirthDate" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Done</Button>
    </Col>
  </Form.Group>
</Form>


    </>
}

*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import ED_edit_profile from '../../../pages/editor/editprofile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<ED_edit_profile />', () => {

//renders
    it('ED_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ED_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('EditorProfile mounts component without crashing', () => {

        const wrapper = mount(<ED_edit_profile />);
        expect(wrapper.find(ED_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('Au EditorProfile profile renders', () => {
        const wrapper = shallow(<ED_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import React from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ED_edit_profile() {

    


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
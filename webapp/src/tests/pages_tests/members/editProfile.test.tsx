import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import MEM_edit_profile from '../../../pages/members/editprofile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<MEM_edit_profile />', () => {

//renders
    it('MEM_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MEM_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('MEM_edit_profile mounts component without crashing', () => {

        const wrapper = mount(<MEM_edit_profile />);
        expect(wrapper.find(MEM_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('Au MEM_edit_profile profile renders', () => {
        const wrapper = shallow(<MEM_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import { IUser } from '../../../../services/crud-server/src/models/user';


export default function MEM_edit_profile() {


    //maybe make it as a component need to query based, on email. Need to load email held in local storage.
    
    const [ setUser, setingUser ] = useState<IUser[]>();


//then I'd need to specify the email in the patch etc.
    useEffect(() => {
        api.user.get().then((responce) => { //I don't specify the amil in this get.
            setingUser(responce.data[0]);
            }).catch((error: any) => console.error(`Error User Extract: ${error}`)); 
    },[0]); //probably this zero?





return <>
<div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link href= '/profile'>My Account</Nav.Link>
</Nav>
</Navbar>
<br />
<h6> Change profile Information</h6>
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
            <Form.Control type="any"  placeholder="`${userSet}`" />  
            <Form.Control type="Number" src={'new Email'} />  
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

    <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
    <Button type="submit">Done</Button>
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
    <Nav.Link href= '/MEMupdatePersInfo' > Personal Information Settings</Nav.Link>
</div>

</>
}
*/
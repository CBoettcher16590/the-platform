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
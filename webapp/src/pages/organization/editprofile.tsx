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
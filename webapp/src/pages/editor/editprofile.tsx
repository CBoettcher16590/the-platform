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
            <h6> Change Profile Information</h6>
            <Form style= {{alignContent: "normal"}}>
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

                <Form.Group>
            <Form.Control placeholder="Enter Image URL" />
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
            <Nav.Link href= '/EDupdateInfo' > Personal Information Settings</Nav.Link>
        </div>

    </>
}
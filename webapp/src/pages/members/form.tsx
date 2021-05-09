import React from "react";
import { Form, Col, Button, Nav, Navbar } from "react-bootstrap";
import './form.css';


export default function AuthForm() {

    return <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">The Platform</Navbar.Brand></Nav>

                <Nav>
                    <Nav.Link href="/authform">Become An Author?</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/profile"> My Account</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

        <div className="loginSignUpBackground">
            <div id="LoginForm">
                <h1>Become an Author</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control

                            type="text"
                            className="form-control"
                            placeholder=" First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control

                            type="text"
                            className="form-control"
                            placeholder=" Last Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control

                            type="text"
                            className="form-control"
                            placeholder=" Your Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload your resume" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Why Would we choose you?</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="form-control"
                            maxLength={400}
                            placeholder="tell us ..." />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary btn-block" >
                        Submit Form
            </Button>
                    <br />
                    <br />
                </Form>
            </div>
        </div>

    </>


}
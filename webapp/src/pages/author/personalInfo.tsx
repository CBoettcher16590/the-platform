import React from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';




export default function AU_personal_info() {


    return <>
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href= '/AUprofile'>My Account</Nav.Link>
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
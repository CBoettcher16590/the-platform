import React from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useState } from 'react';




export default function MEM_personal_info() {

    //const fNameOriginal:string = window.localStorage.getItem("firstName");            
    // const lnameOriginal:string = window.localStorage.getItem("lastName");
    const emailOriginal = window.localStorage.getItem("email");
    //birthday
    //New Phone Number
   
    const [ firstName, setFirstName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ email, setNewEmail ] = useState<string>('');


//ideally you'd want to call an apiget 

// <Form.Control type="Number"  placeholder={`${emailOriginal}`} />




 return <>
<div>
<Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link href= '/profile'>My Account</Nav.Link>
</Nav>
</Navbar>
</div>

{/* LOAD CURRENT DATA MVP */}


<Form className="profileInfo">
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
            <Form.Control type="Number"  placeholder={`${emailOriginal}`} />
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
    </Form>


</>
}
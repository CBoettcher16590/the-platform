import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router';
import  _Update  from '../../data/updateinfo';



export default function MEM_edit_profile() {
    const history = useHistory();

    const UpdateInfoHandle = _Update();

    const [fName, setfName] = useState<string>();
    const [lName, setlName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [bio, setbio] = useState<string>();
    const [imglink, setlimgLink] = useState<string>();
    const [userBD, setUersBD] = useState<string>();
    const [phoneNumber, setphoneNumber] = useState<number>();

    function handelUpdate(e:any){
        e.preventDefault();
        console.log("FNAME: ", fName,"LNAME: ", lName, " EMAIL: ", email," BIO: ", bio, " ImgLink: ", imglink, " UserBD: ", userBD, "PhoneNumber:", phoneNumber );
        // the ! will allow us to handel the "undefined error"
        UpdateInfoHandle._Update(fName!, lName!, email!,phoneNumber!, imglink!, userBD!, bio! );
        history.push('/');
    }

return <>
<div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link href= '/profile'>My Account</Nav.Link>
</Nav>
</Navbar>
<br />
<h6> Change profile Information</h6>
<Form.Group as={Row} >      
        <Form.Label column sm={10}>
            First name
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="email"  placeholder="New Email" />  
        </Col>
    </Form.Group>
    <Form.Group as={Row} >      
        <Form.Label column sm={10}>
            Last name
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="email"  placeholder="New Email" />  
        </Col>
    </Form.Group>
    <Form style= {{alignContent: "normal"}}>
    <Form.Group as={Row} >      
        <Form.Label column sm={10}>
            Profile Picture
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="url"placeholder="Enter New Image URL" />  
        </Col>
    </Form.Group>
    
    <Form.Group as={Row} >      
        <Form.Label column sm={10}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="email"  placeholder="New Email" />  
        </Col>
    </Form.Group>

    <Form.Group as={Row} >
        <Form.Label column sm={10}>
            Phone
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="Phone number"  placeholder="New Phone Number" />
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
        maxLength = {150}
        as="textarea" rows={3} 
        placeholder= "Maximum of 100"/>
    </Form.Group>
    <Button type="submit" onClick={handelUpdate}>
                Update
            </Button>
</Form>
<br/>
</div>

</>
}
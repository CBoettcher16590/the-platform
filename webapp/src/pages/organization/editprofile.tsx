import React, { useEffect } from 'react';
import { Navbar, Nav, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api'
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Mem_edit_profile() {

    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const userID = localStorage.getItem("userID") || "";

    const [imageLink, setImageLink] = useState<string>();
    const [email, setEmail] = useState<any>();
    const [phoneNumber, setPhoneNumber] = useState<any>();
    const [orgName, setorgName] = useState<string>();
    const [bio, setBio] = useState<string>();
    const [password, setPassword] = useState<string>();

    // This use effect is for the update loading effect
    useEffect(() => {
        if (isLoading) {
            setTimeout(function () {
                setLoading(false);
            }, 2000)
        };

    }, [isLoading]);


    function SubmitUserUpdate(event: any) {
        event.preventDefault();
        setLoading(true);
        api.orgs.updateUser({ imageLink, password, email, phoneNumber, orgName, bio });
        setTimeout(function () {
            history.push('/orgProfile');
        }, 1000);
    }

    return <>
        <div id="editAuthorBG">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">

                    <Nav.Link id="account1" href="/orgProfile">
                        <div className="border1"></div>
                        <div className="border1"></div>
                                        My Account</Nav.Link>                </Nav>
            </Navbar>

            <h2 id="updateHeader"> Change Profile Information</h2>

            <Form className="UpdateForm">
                <Form.Group className="updateInfo">

                    <Form.Label className="label">Profile Picture</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={imageLink}
                            onChange={(e) => setImageLink(e.target.value)}
                            type="url"
                            placeholder="Enter New Image URL" />
                    </Col>

                    <Form.Label className="label">New Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" />
                    </Col>

                    <Form.Label className="label">Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="New Email" />
                    </Col>

                    <Form.Label className="label">Phone</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="tel"
                            placeholder="New Phone Number" />
                    </Col>

                    <Form.Label className="label">Org. Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={orgName}
                            onChange={(e) => setorgName(e.target.value)}
                            type="name"
                            placeholder="Org. Name" />
                    </Col>

                    <Form.Label className="label">Bio </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            maxLength={200}
                            as="textarea"
                            rows={3} />
                    </Col>


                </Form.Group>

                <Button type="submit" disabled={isLoading} id="updateButton" className="btn btn-primary" onClick={SubmitUserUpdate}>
                    {isLoading ? 'Loading…' : 'Update'}
                </Button>
            </Form>

        </div>

    </>
}
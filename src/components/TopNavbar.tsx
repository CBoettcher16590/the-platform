import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function TopNavbar( props:{} ){



    return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            </>;

}
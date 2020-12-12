import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function TopNavbar( props:{} ){



    return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
            </>;

}
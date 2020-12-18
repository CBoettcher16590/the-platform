import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


 export default function users(){
    return(
        <div>
                        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/adminHome">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
            <h3>Users</h3>
        </div>
    )
 }

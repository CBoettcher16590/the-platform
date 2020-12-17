import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


 export default function reported_reviews(){
    return(
        <div>
                        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/adminHome">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
            <h3>Reported Reviews</h3>
        </div>
    )
 }

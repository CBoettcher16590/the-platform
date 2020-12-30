import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';


 export default function reported_articles(){
    return<>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/adminHome">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
            </Navbar>
        <div>
            <h3>Reported Articles will appear here</h3>
        </div>


    </>
 }